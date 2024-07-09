import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();

  getItems(): any[] {
    return this.cartItemsSubject.getValue();
  }

  addToCart(item: any): void {
    const cartItems = this.getItems();
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      cartItems.push(item);
    }
    this.cartItemsSubject.next(cartItems);
  }

  updateQuantity(item: any, quantity: number): void {
    const cartItems = this.getItems();
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
    this.cartItemsSubject.next(cartItems);
  }

  removeFromCart(item: any): void {
    const cartItems = this.getItems();
    const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
    }
    this.cartItemsSubject.next(cartItems);
  }

  calculateTotal(): number {
    return this.getItems().reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
  }
}
