import { ShoppingCartService } from './../shopping-cart/service/shopping-cart.service';
import { Product } from './../models/Product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input("product") product;
  @Input("show-actions") showActions: true;
  @Input('shoping-Cart') shoppingCart;
  constructor(private cartService:ShoppingCartService) { }

  ngOnInit() {
  }
  addToCart(){
    this.cartService.addToCart(this.product);
    }

  getQuantity(){
  if(!this.shoppingCart) return 0;  
  let item=this.shoppingCart.itemsMap[this.product.$key];
  return item ? item.quantity : 0;  
}
}
