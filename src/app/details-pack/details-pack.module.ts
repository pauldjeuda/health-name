import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPackPageRoutingModule } from './details-pack-routing.module';

import { DetailsPackPage } from './details-pack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPackPageRoutingModule
  ],
  declarations: [DetailsPackPage]
})
export class DetailsPackPageModule {}
