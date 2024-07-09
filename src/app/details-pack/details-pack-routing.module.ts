import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPackPage } from './details-pack.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPackPageRoutingModule {}
