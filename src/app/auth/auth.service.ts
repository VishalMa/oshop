import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppUser } from '../models/app-user';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth , private route: ActivatedRoute, private userService:UserService) {
    this.user$ = this.afAuth.authState;
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  login() {
   const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  getUserName(): any {
   this.user$ = this.afAuth.authState;
  }

  get appUser$(): Observable<AppUser>{
    return this.user$.switchMap(
      user => { 
       if(user) return this.userService.get(user.uid);
      return  Observable.of(null);
      }
    )
  }
}
