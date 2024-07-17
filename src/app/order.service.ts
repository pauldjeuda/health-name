import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private firestore: AngularFirestore) {}

  addOrder(order: any) {
    return this.firestore.collection('orders').add(order);
  }

  getOrders() {
    return this.firestore.collection('orders').valueChanges({ idField: 'id' });
  }
}
