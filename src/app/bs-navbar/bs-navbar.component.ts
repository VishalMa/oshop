import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart/service/shopping-cart.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser:any;
  cart$:Observable<ShoppingCart>;
  constructor(public authService: AuthService , private shoppingCartService:ShoppingCartService) {
    this.authService.appUser$.subscribe(appuser=> this.appUser=appuser);
  }

  async ngOnInit() {
    this.cart$=await this.shoppingCartService.getCart();
  }

  logout() {
  this.authService.logout();
  }
  // getUserName(): any {
  //   this.authService.getUserName();
  // }
}
