import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  itemId: string | null = null;
  itemDetails$: Observable<any> | undefined;
  // packId: string | null = null;
  // packDetails$: Observable<any> | undefined;
  packId: string | null = null;
  pack$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this.itemDetails$ = this.firestore.doc<any>(`tests/${this.itemId}`).valueChanges();

        
      }

      // this.packId = params.get('id');
      // if (this.packId) {
      //   this.packDetails$ = this.firestore.doc<any>(`packs/${this.packId}`).valueChanges();
      // }
    });
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
