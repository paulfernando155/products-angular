import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoriesService } from 'src/app/services/categories.service';

import { Product } from 'src/app/interfaces/product';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: string;
  products: Product[] = [];
  category: Category;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.categoriesService.getCategory(this.id).subscribe(res => {
        this.category = res.category;
        this.products = res.products;
      }, err => console.log(err));
    });
  }

  selectedCard(id: string) {
    this.router.navigate(['/products', id]);
  }

}
