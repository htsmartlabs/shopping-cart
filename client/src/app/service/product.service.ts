import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Product } from '../model/product';
import { BuyProduct } from '../model/buy-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  product: Product;
  products: Product[];
  buyAllProducts: BuyProduct[];

  readonly URL: string = 'http://localhost:3000/product';
  private headers = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) {
    this.buyAllProducts = [];
   }

  getProducts() {
    return this.http.get(this.URL);
  }
}
