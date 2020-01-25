import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../interfaces/category';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URI = 'http://localhost:4000/api/categories';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<{ categories: Category[] }>(this.URI);
  }

  getCategory(id: string) {
    return this.http.get<{ category: Category, products: Product[] }>(`${this.URI}/${id}`);
  }
}
