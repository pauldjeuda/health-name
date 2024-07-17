import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  islogin = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() { }

  signUp() {
    this.islogin = true;
    this.loginService.PwdEmailAuthRegister(this.email, this.password)
      .then((res) => {
        this.islogin = false;
        this.loginService.setUserName(this.name); // Stocker le nom de l'utilisateur
        this.loginService.addUser({ uid: res.user?.uid, email: this.email, name: this.name });
        this.loginService.SendVerificationMail();
        window.alert("Inscription réussie. Veuillez vérifier votre email.");
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        this.islogin = false;
        window.alert(error.message);
      });
  }
}
