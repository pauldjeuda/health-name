import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginService } from '../login.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user: any;
  name: string = "Nom d'utilisateur"; // Valeur par défaut si les données utilisateur ne sont pas disponibles
  email: string = "email@example.com"; // Valeur par défaut si les données utilisateur ne sont pas disponibles

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public loginService: LoginService, // Rendre public pour l'accès dans le template
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('user')!);
    if (userData) {
      this.user = userData;
      this.name = userData.displayName || this.loginService.getUserName() || "Nom d'utilisateur"; // Utilisez le nom de l'utilisateur ou une valeur par défaut
      this.email = userData.email || "email@example.com"; // Utilisez l'email de l'utilisateur ou une valeur par défaut
    }
  }

  navigateToClientService() {
    // Navigation vers le service client, modifiez cette route en fonction de votre application
    this.navCtrl.navigateForward('/client-service');
  }

  logout() {
    this.loginService.SignOut().then(() => {
      this.navCtrl.navigateRoot('/login');
    });
  }
}
