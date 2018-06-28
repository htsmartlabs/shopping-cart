import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (this.productService.buyAllProducts) {
    this.cart = this.productService.buyAllProducts.length;
    } else {
      this.cart = 0;
    }
  }

}
