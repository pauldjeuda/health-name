import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addTest(test: any) {
    return this.firestore.collection('tests').add(test);
  }

  addPack(pack: any) {
    return this.firestore.collection('packs').add(pack);
  }
}
