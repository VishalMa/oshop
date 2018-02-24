import { Product } from './Product';
import { ShoppingCartItems } from './shopping-cart-item';
export class ShoppingCart{
    
 items: ShoppingCartItems[]=[];

   constructor(public itemsMap : {[productId:string]: ShoppingCartItems}){
    for(let productId in itemsMap){
    this.items.push( new ShoppingCartItems(itemsMap[productId].product,itemsMap[productId].quantity));
    }
   }
    // get productIds(){
    // return Object.keys(this.items);
    // }

    get totalPrice(){
       let sum=0;
    for(let productId in this.items)
        sum += this.items[productId].totalPrice;
     return sum;
    }

   get shoppingCartItemCount(){
    let count=0;
    for(let productId in this.itemsMap){
        count += this.itemsMap[productId].quantity;

    }
    return count;
   }
}