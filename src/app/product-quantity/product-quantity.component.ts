import { ShoppingCartService } from './../shopping-cart/service/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
 @Input() quantity;
 @Input("product") product;
 @Input('shoping-Cart') shoppingCart;

 constructor(private cartService:ShoppingCartService) { }

    removeFromCart(){
      this.cartService.removeFromCart(this.product);
    }

    addToCart(){
      this.cartService.addToCart(this.product);
      }

}
