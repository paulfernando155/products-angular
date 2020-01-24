import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoriesService } from 'src/app/services/categories.service';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: string;
  products: Product[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['categoryId'];
      this.categoriesService.getProducts(this.id).subscribe(res => this.products = res, err => console.log(err));
    });
  }

}
