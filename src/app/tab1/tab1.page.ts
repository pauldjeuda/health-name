import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ActionSheetController, IonModal, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { PaymentService } from '../payment.service';
import { LocationService } from '../location.service'; // Importez le service de localisation

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
  filteredItems: any[] = [];
  filteredPacks: any[] = [];
  searchTerm: string = '';
  selectedSegment: string = 'simple';
  isDataLoaded: boolean = false;
  deliveryLocation: { latitude: number, longitude: number, address: string } | undefined;

  constructor(
    public firestore: AngularFirestore,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private cartService: CartService,
    private toastController: ToastController,
    private paymentService: PaymentService,
    private locationService: LocationService // Injectez le service de localisation
  ) {
    this.loadItems();
    this.loadPacks();
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  loadItems() {
    this.items = this.firestore.collection('tests').valueChanges();
    this.items.subscribe(data => {
      this.filteredItems = data;
      this.isDataLoaded = true;
    });
  }

  loadPacks() {
    this.packs = this.firestore.collection('packs').valueChanges();
    this.packs.subscribe(data => {
      this.filteredPacks = data;
      this.isDataLoaded = true;
    });
  }

  onSegmentChange() {
    this.selectedSegment = this.selectedSegment === 'pack' ? 'pack' : 'simple';
    this.searchTests();
  }

  searchTests() {
    if (this.searchTerm.trim() === '') {
      if (this.selectedSegment === 'simple') {
        this.loadItems();
      } else {
        this.loadPacks();
      }
    } else {
      if (this.selectedSegment === 'simple') {
        this.filteredItems = this.filteredItems.filter(item =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.filteredPacks = this.filteredPacks.filter(pack =>
          pack.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }
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

  async getCurrentLocation() {
    try {
      this.deliveryLocation = await this.locationService.getCurrentPosition();
      this.presentToast('Position récupérée avec succès');
    } catch (error) {
      this.presentToast('Erreur lors de la récupération de la position');
    }
  }

  pay() {
    this.saveOrder();
  }

  saveOrder() {
    // Vérifiez si le panier est vide ou si l'adresse de livraison n'est pas renseignée
    if (this.cartItems.length === 0 || this.calculateTotal() === 0) {
      this.presentToast('Veuillez ajouter des articles au panier avant de passer une commande.');
      return;
    }
  
    if (!this.deliveryLocation || !this.deliveryLocation.address) {
      this.presentToast('Veuillez renseigner l\'adresse de livraison avant de passer une commande.');
      return;
    }
  
    const order = {
      items: this.cartItems,
      totalCost: this.calculateTotal(),
      date: new Date().toISOString(),
      status: 'pending',
      deliveryLocation: this.deliveryLocation // Ajoutez la position de livraison
    };
  
    this.firestore.collection('orders').add(order).then(() => {
      this.presentToast('Commande enregistrée avec succès');
      this.cartService.clearCart(); // Efface le panier après enregistrement
      this.deliveryLocation = undefined; // Réinitialise l'adresse de livraison
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
