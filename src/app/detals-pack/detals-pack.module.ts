import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalsPackPageRoutingModule } from './detals-pack-routing.module';

import { DetalsPackPage } from './detals-pack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalsPackPageRoutingModule
  ],
  declarations: [DetalsPackPage]
})
export class DetalsPackPageModule {}
