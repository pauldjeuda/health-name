import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  islogin = false;

  constructor(
    public navCntrl: NavController,
    private loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['tabs']);
    }
  }

  loginWithCredentialsFunc() {
    this.islogin = true;
    this.loginService.PwdEmailAuthLogin(this.email, this.password)
      .then(() => {
        this.islogin = false;
        window.alert('Votre compte a bien été identifié.');
        this.router.navigateByUrl('tabs');
      })
      .catch((er) => {
        this.islogin = false;
        window.alert('Erreur d\'authentification. Veuillez vérifier vos identifiants.');
      });
  }

  loginWithGoogleFunc() {
    this.islogin = true;
    this.loginService.GoogleAuthLogin().then(() => {
      this.islogin = false;
      this.router.navigateByUrl('tabs');
    }).catch((er) => {
      this.islogin = false;
      window.alert('Erreur d\'authentification avec Google.');
    });
  }
}
