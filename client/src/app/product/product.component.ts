import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Cart } from '../model/cart';
import { BuyProduct } from '../model/buy-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  cart: Cart;
  quantity: number;
  buyProduct: BuyProduct;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
    this.quantity = 0;
    this.buyProduct = new BuyProduct();

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

  public buyNow(product) {
    console.log(product._id);
    this.buyProduct.product_id = product._id;
    this.buyProduct.price = product.price;
    this.buyProduct.quantity = this.quantity;
    console.log(this.buyProduct);
    this.productService.buyAllProducts.push(this.buyProduct);
    console.log(this.productService.buyAllProducts);
  }

  public addQuantity(q){
    this.quantity += q;
  }
}
