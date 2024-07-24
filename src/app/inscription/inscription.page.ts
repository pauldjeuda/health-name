import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  matricule: string = "";
  islogin = false;

  constructor(
    public navCntrl: NavController,
    private loginService: LoginService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.islogin = true;
    this.loginService.PwdEmailAuthRegister(this.email, this.password, this.name)
    .then((res) => {
      window.alert("Inscription réussie. Veuillez vérifier votre email.");
      this.loginService.SendVerificationMail();
      this.router.navigate(['verify-email']);
      this.router.navigateByUrl('/login');
      this.islogin = false;
    })
    .catch((error) => {
      this.islogin = false;
      window.alert(error.message);
    });
  }

  loginWithGoogleFunc() {
    this.islogin = true;
    this.loginService.GoogleAuthLogin().then(
      (d) => {
        this.islogin = false;
        console.log(d);
      }
    ).catch(
      (er) => {
        this.islogin = false;
        console.log(er);
      }
    );
  }
}
