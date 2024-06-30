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
  matricule: string=""
  islogin = false;

  constructor(
    public navCntrl: NavController,
    private loginService: LoginService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp(){
    this.islogin = true;
    this.loginService.PwdEmailAuthRegister(this.email,this.password)
    .then((res) => {
      // Do something here
      window.alert("success")
      this.loginService.addUser({email:this.email,motDePasse:this.password,name:this.name,matricule: this.matricule})
      this.loginService.SendVerificationMail()
      this.router.navigate(['verify-email']);
      this.islogin = false;
     
      // Redirige vers la page de ton choix en utilisant le router
      this.router.navigateByUrl('/login');

     
    }).catch((error) => {
      window.alert(error.message)
    })
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
