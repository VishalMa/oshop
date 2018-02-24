import { Observable } from 'rxjs/Observable';
import { UserService } from './../user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'


@Injectable()
export class AdminAuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate() : Observable<boolean> {
    return this.authService.appUser$.map(user => user.isAdmin);
      }
}
