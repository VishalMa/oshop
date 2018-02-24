import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
@Injectable()
export class ProductFilterComponent {
  @Input("category")
  category;

  categories$;

  constructor(private categoryService:CategoryService) {
    this.categories$=this.categoryService.getAll();
   }

  }
