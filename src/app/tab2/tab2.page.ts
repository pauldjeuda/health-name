import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tests = [
    {
      date: "13-09-2020",
      name: "Epatite A",
      delay: 3,
      status: "paid",
      cost: 10000
    },
    {
      date: "14-09-2023",
      name: "Epatite A",
      delay: 3,
      status: "pending",
      cost: 10000
    },
    {
      date: "13-09-2020",
      name: "Epatite A",
      delay: 3,
      status: "result",
      cost: 10000
    }
  ];

  filteredTests: any[] | undefined;
  selectedSegment: string = 'all';

  constructor() {
    this.filterTests('all');
  }

  filterTests(status: string) {
    this.selectedSegment = status;
    if (status === 'all') {
      this.filteredTests = this.tests;
    } else {
      this.filteredTests = this.tests.filter(test => test.status === status);
    }
  }
}