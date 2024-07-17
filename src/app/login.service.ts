import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

interface UserData {
  name?: string;
  email?: string;
  uid?: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private userName: string = ''; // Variable pour stocker le nom de l'utilisateur

  constructor(private oAuth: AngularFireAuth, private fireBase: AngularFirestore, private router: Router) {}

  GoogleAuthLogin(): Promise<any> {
    return this.oAuth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
      this.setUserData(result.user);
    });
  }

  PwdEmailAuthLogin(email: string, password: string): Promise<any> {
    return this.oAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this.setUserData(result.user);
    });
  }

  PwdEmailAuthRegister(email: string, password: string): Promise<any> {
    return this.oAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.setUserData(result.user);
    });
  }

  SendVerificationMail() {
    return this.oAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification();
    });
  }

  addUser(user: UserData) {
    return this.fireBase.collection('user').add(user);
  }

  setUserData(user: any) {
    this.fireBase.collection('user').doc(user.uid).valueChanges().subscribe((userData) => {
      const userProfileData = {
        uid: user.uid,
        email: user.email,
        displayName: this.userName || (userData as UserData)?.name || user.displayName || 'Nom d\'utilisateur',
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      };
      localStorage.setItem('user', JSON.stringify(userProfileData));
    });
  }

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  SignOut() {
    return this.oAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
