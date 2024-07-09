import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalsPackPage } from './detals-pack.page';

const routes: Routes = [
  {
    path: '',
    component: DetalsPackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalsPackPageRoutingModule {}
