import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  selectedSegment: string = 'test';

  test = {
    name: '',
    description: '',
    price: 0,
    time: ''
  };

  pack = {
    name: '',
    description: '',
    instruction: '',
    listTest: '',
    price: 0,
    time: ''
  };

  constructor(private firebaseService: FirebaseService) { }

  onSegmentChange() {
    // Reset forms when switching segments
    this.test = {
      name: '',
      description: '',
      price: 0,
      time: ''
    };
    this.pack = {
      name: '',
      description: '',
      instruction: '',
      listTest: '',
      price: 0,
      time: ''
    };
  }

  addTest() {
    this.firebaseService.addTest(this.test).then(() => {
      alert('Test ajouté avec succès');
    }).catch(error => {
      console.error('Erreur lors de l\'ajout du test:', error);
    });
  }

  addPack() {
    this.firebaseService.addPack(this.pack).then(() => {
      alert('Pack ajouté avec succès');
    }).catch(error => {
      console.error('Erreur lors de l\'ajout du pack:', error);
    });
  }
}
