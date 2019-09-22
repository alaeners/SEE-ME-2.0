import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;


  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    // var serviceAccount = require('/Users/alaene/Desktop/seeme-16d83-firebase-adminsdk-tqczm-53e308d789.json');

    // admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    // databaseURL: 'https://seeme-16d83.firebaseio.com'
    // });
  }

  // Login normal
  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Sign up with email/password
  signUp(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('Cadastro Realizado com sucesso.');
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      });
  }

  signOut(email, password) {
    return this._firebaseAuth.auth.signOut();
  }
  LogOut() {
    this._firebaseAuth.auth.signOut();
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

}
