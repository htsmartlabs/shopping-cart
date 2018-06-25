import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private cart: Cart;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }

  public getProduct() {
    this.productService.getProducts().subscribe(data => {
      this.productService.products = data as Product[];
      this.products = this.productService.products;
    },
    error => {
      console.log(error);
    });
  }

  public buyNow(product){
    console.log(product);
  }


}
