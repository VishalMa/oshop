import { ShoppingCartService } from './../shopping-cart/service/shopping-cart.service';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { Product } from './../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../admin/service/product.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/switchMap"
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy {
  products : Product[];
  category;
  filteredProducts : Product [];
  cart:any;
  subscription: Subscription;

  constructor(private productService: ProductService,  private route:ActivatedRoute,
    private cartService:ShoppingCartService
     ) {
   
    this.productService.getAll().
    switchMap(
    products => {
     this.products= products;
     return route.queryParamMap;
    }).subscribe(
      params=>{
      this.category=params.get("category");
      this.filteredProducts= this.category ? this.products.filter( p=> p.category ===  this.category ) : this.products
      }
      );
  
   }

   async ngOnInit(){
    this.subscription=(await this.cartService.getCart()).subscribe(
      (cart) => {
        this.cart=cart
      console.log("********" + this.cart);
      }
    );

   }

   ngOnDestroy(){
    this.subscription.unsubscribe();
   }
}
