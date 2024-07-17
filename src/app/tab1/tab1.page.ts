import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActionSheetController, IonModal, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { PaymentService } from '../payment.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @ViewChild('paymentModal') paymentModal: IonModal | undefined;
  presentingElement: Element | null = null;

  items: Observable<any[]> | undefined;
  packs: Observable<any[]> | undefined;
  cartItems: any[] = [];

  selectedSegment: string = 'simple';

  constructor(
    public firestore: AngularFirestore,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private cartService: CartService,
    private toastController: ToastController,
    private paymentService: PaymentService
  ) {
    this.items = this.firestore.collection('tests').valueChanges();
    this.packs = this.firestore.collection('packs').valueChanges();
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  onSegmentChange() {
    this.selectedSegment = this.selectedSegment === 'pack' ? 'pack' : 'simple';
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.presentToast('Article ajouté au panier');
  }

  updateQuantity(item: any, quantity: number) {
    if (quantity < 1) return;
    this.cartService.updateQuantity(item, quantity);
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  pay() {
    this.saveOrder();
  }

  saveOrder() {
    const order = {
      items: this.cartItems,
      totalCost: this.calculateTotal(),
      date: new Date().toISOString(),
      status: 'pending'
    };

    this.firestore.collection('orders').add(order).then(() => {
      this.presentToast('Commande enregistrée avec succès');
      this.cartService.clearCart(); // Efface le panier après enregistrement
      if (this.modal) {
        this.modal.dismiss();
      }
    }).catch(error => {
      this.presentToast('Erreur lors de l\'enregistrement de la commande');
      console.error('Erreur lors de l\'enregistrement de la commande:', error);
    });
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Voulez-vous annuler ?',
      buttons: [
        {
          text: 'Oui',
          role: 'confirm',
        },
        {
          text: 'Non',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  openModal() {
    if (this.modal) {
      this.modal.present();
    }
  }

  updateCart() {
    this.cartItems = [...this.cartItems];
  }

  goToDetails(itemId: string) {
    this.navCtrl.navigateForward(`/details/${itemId}`);
  }

  goToDetailsPack(packId: string) {
    this.navCtrl.navigateForward(`/details-pack/${packId}`);
  }
}
