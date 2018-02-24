import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productList:Product[];
  filteredList:any[];
  constructor(private productService: ProductService) {
     productService.getAll().subscribe(product => this.filteredList = this.productList=product);
   }

  ngOnInit() {
    console.log("AdminProductsComponent OnInit");
 
  }
  filter(query:string){
  this.filteredList= (query) ? this.productList.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())) : this.productList ;
  }

}
