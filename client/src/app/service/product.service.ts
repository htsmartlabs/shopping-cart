import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Product;
  public products: Product[];

  readonly URL: string = 'http://localhost:3000/product';
  private headers = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(this.URL);
  }
}
