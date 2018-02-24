import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

create(product){
  this.db.list("/products").push(product);
}

getAll(){
return this.db.list("/products");
}

getByKey(productKey){
  return this.db.object("/products/" + productKey);
}

update(productKey,product){
this.db.object("/products/"+ productKey).update(product);
}

delete(productKey){
this.db.object("/products/" + productKey).remove();
}
}
