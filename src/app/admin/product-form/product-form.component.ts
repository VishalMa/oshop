import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/take"

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categoryList$;
  product={};
  productKey;
 
  constructor(private router:Router,private categoryService: CategoryService, private productService:ProductService,
  private route:ActivatedRoute) {
    this.categoryList$=categoryService.getAll();
   }

  ngOnInit() {
   this.productKey=this.route.snapshot.params["id"];
   this.productService.getByKey(this.productKey).take(1).subscribe(p=>
    this.product=p);
    // this.categoryService.getCategories().subscribe(list=>
    // this.categoryList=list);
  }

  submitMethod(product){
  (this.productKey)? this.productService.update(this.productKey,this.product) :
  this.productService.create(product);
  this.router.navigate(['/admin/products']);
  }
  
  onDelete() {
  if(!confirm('Are you sure you want to delete this product ?')) return;
  this.productService.delete(this.productKey);
  this.router.navigate(['/admin/products']);
  }

}
