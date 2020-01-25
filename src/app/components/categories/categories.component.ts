import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from 'src/app/interfaces/category';

import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((res) => {
      this.categories = res.categories
    }, err => console.log(err));
  }

  selectedCard(id: string) {
    this.router.navigate(['/categories', id]);
  }

}
