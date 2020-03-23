import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request: RequestService) {

  }
  products: Array<any>;
  categories: Array<any>;
  product: any;
  categoryProducts: Array<any>;
  numOfProducts: number;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() {
    this.request.getProducts().subscribe(
      result => {
        this.products = result;
        this.numOfProducts = this.products.length;
        console.log(this.products);
      });
  }

  getCategories() {
    this.request.getCategories().subscribe(
      result => {
        this.categories = result;
      });
  }

  getSingleProduct(id: number) {
    this.request.getProducts().subscribe(
      result => {
        this.products = result;
        this.product = this.products.filter(f => f.id === id);
        this.categoryProducts = null;
      });
  }

  getCategoryProducts(categoryId: number) {
    this.request.getProducts().subscribe(
      result => {
        this.products = result;
        this.categoryProducts = this.products.filter(f => f.categoryId === categoryId);
        if (this.product) { this.product = null; }
      });
  }


}
