import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActionSheetController, IonModal, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';

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
    private toastController: ToastController
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
    if (this.paymentModal) {
      this.paymentModal.present();
    }
  }

  async processPayment(method: string) {
    // Fermeture de la modal de sélection de paiement
    if (this.paymentModal) {
      await this.paymentModal.dismiss();
    }

    if (method === 'orangeMoney') {
      this.payWithOrangeMoney();
    } else if (method === 'mtnMoney') {
      this.payWithMtnMoney();
    }
  }

  payWithOrangeMoney() {
    // Implémentation du paiement avec Orange Money
    console.log('Paiement avec Orange Money');
    this.presentToast('Paiement avec Orange Money en cours...');
    // Ajoutez ici la logique pour effectuer un paiement avec Orange Money
  }

  payWithMtnMoney() {
    // Implémentation du paiement avec MTN Money
    console.log('Paiement avec MTN Money');
    this.presentToast('Paiement avec MTN Money en cours...');
    // Ajoutez ici la logique pour effectuer un paiement avec MTN Money
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
