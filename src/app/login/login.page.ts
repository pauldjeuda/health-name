import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { LoginService } from '../login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  islogin = false;

 
  constructor( 
    public navCntrl: NavController,
    private loginService: LoginService,
    public router: Router,

    ) { 
      
    }

  ngOnInit() {
  }
  async signup() {
    // const user = await createUserWithEmailAndPassword(
    //   this.auth,
    //   this.email,
    //   this.password
    // );
    return null;
  }

  gotoLogin() {
    // this.navCntrl.navigateBack('login');
    // this.router.navigateByUrl('login');
  }
  loginWithCredentialsFunc() {
    this.islogin = true;
    this.loginService.PwdEmailAuthLogin(this.email, this.password)
      .then((d) => {
        this.islogin = false;
        console.log(d);
        // Redirige vers la page de ton choix en utilisant le router
        window.alert('Votre compte a bien été identifié.');
        this.router.navigateByUrl('tabs');
      })
      .catch((er) => {
        this.islogin = false;
        console.log(er);
        window.alert('Erreur d\'authentification. Veuillez vérifier vos identifiants.');
      });
  }
  loginWithGoogleFunc(){
    this.islogin = true
    this.loginService.GoogleAuthLogin().then(
      (d) => {
        this.islogin = false
        console.log(d)
      }
    ).catch(
      (er) => {
        this.islogin = false
        console.log(er)
      }
    )
  }
}