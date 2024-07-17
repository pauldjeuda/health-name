import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tests: any[] = [];
  filteredTests: any[] = [];
  selectedSegment: string = 'all';

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.firestore.collection('orders').valueChanges({ idField: 'id' }).subscribe((data: any) => {
      this.tests = data;
      this.filterTests(this.selectedSegment);
    });
  }

  filterTests(status: string) {
    this.selectedSegment = status;
    if (status === 'all') {
      this.filteredTests = this.tests;
    } else {
      this.filteredTests = this.tests.filter(test => test.status === status);
    }
  }

  deleteTest(test: any) {
    this.firestore.collection('orders').doc(test.id).delete().then(() => {
      console.log('Test deleted successfully');
    }).catch((error) => {
      console.error('Error deleting test:', error);
    });
  }
}
