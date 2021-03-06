import { ShoppingCart } from './../../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../models/Product';
import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

 private create(){
    return this.db.list('/shopping-carts').push(
      {
        dateCreated : new Date().getTime()
      }
    )
  }

 async getCart() : Promise<Observable<ShoppingCart>>{
   let cartId= await this.getOrCreateCartId();
  return this.db.object('/shopping-carts/'+ cartId).map(
    x => new ShoppingCart(x.items)
  );
  }
// Use of Async and await inplace of promise return from
// create method and using then to get key value
  private async getOrCreateCartId(): Promise<string>{
    let cartId= localStorage.getItem('cartId');
    if(cartId) return cartId;

     let result = await this.create();
     localStorage.setItem('cartId',result.key);
     return result.key;    
   }

   async addToCart(product : Product){
    this.updateItem(product,1);

   }

  async removeFromCart(product : Product){
    this.updateItem(product, -1);
   }

  private async updateItem(product: Product, change :number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItems(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({ product: product, quantity: (item.quantity || 0) + change });
    });
  }

  private getItems(cartId: any, product: string) {
    let item$ = this.db.object('/shopping-carts/' + cartId + "/items/" + product);
    return item$;
  }
  
}
