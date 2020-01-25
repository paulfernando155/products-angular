import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/services/products.service';

import { Product } from 'src/app/interfaces/product';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: string;
  product: Product;
  category: Category

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(res => {
        this.product = res.product;
      }, err => console.log(err));
    });
  }

}
