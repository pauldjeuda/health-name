import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Tab1Page } from './tab1/tab1.page';
import { DetailsPackPage } from './details-pack/details-pack.page';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDGK8nfeYdVZTLbI2l9gwCgqyVNGxveLvg",
  authDomain: "health-test-a978b.firebaseapp.com",
  projectId: "health-test-a978b",
  storageBucket: "health-test-a978b.appspot.com",
  messagingSenderId: "759217319139",
  appId: "1:759217319139:web:a8c45067c516c608f869d6",
  measurementId: "G-R6L819TFQF"
  }
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
