import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details-pack',
  templateUrl: './details-pack.page.html',
  styleUrls: ['./details-pack.page.scss'],
})
export class DetailsPackPage implements OnInit {
  packId: string | null = null;
  packDetails$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.packId = params.get('id');
      if (this.packId) {
        this.packDetails$ = this.firestore.doc<any>(`packs/${this.packId}`).valueChanges();
      }
    });
  }

  addToCart(pack: any) {
    this.cartService.addToCart(pack);
  }
}
