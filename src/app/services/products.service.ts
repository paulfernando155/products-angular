import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URI = 'http://localhost:4000/api/products';

  constructor(private http: HttpClient) { }

  getProduct(id: string) {
    return this.http.get<{ product: Product }>(`${this.URI}/${id}`);
  }

}
