import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';



@Injectable({providedIn: 'root'})
export class LoginService {
  getCurrentUser(): any {
    throw new Error('Method not implemented.');
  }
    constructor(private oAuth: AngularFireAuth,private fireBase:AngularFirestore) { }

    GoogleAuthLogin(): Promise<any>{
        return this.oAuth.signInWithPopup(new GoogleAuthProvider())
    }


    PwdEmailAuthLogin(email:string, password: string): Promise<any>{
        return this.oAuth.signInWithEmailAndPassword(email, password)
    }
    
    PwdEmailAuthRegister(email:string, password: string): Promise<any>{
        return this.oAuth.createUserWithEmailAndPassword(email, password,)
    }
    SendVerificationMail() {
        return this.oAuth.currentUser.then((user: any) => {
          return user.sendEmailVerification().then(() => {
            
          });

        });
  }
addUser(user:any){
    console.log(user);
this.fireBase.collection('user').add(user)
}
    
      
}
