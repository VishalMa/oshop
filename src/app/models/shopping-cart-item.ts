import { Product } from './Product';
export class ShoppingCartItems{
   // totalPrice:number;
    constructor(public product:Product, public quantity:number ){
   // this.totalPrice=this.product.price * this.quantity;
    }

    get totalPrice(){
    return this.product.price * this.quantity;
    }
}