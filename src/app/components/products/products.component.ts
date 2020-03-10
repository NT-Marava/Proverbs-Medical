import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private request: RequestService) { }
  products: Array<any>;
  categories: Array<any>;
  product: any;
  categoryProducts: Array<any>;
  numOfProducts: number;
  categoryName: string;

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.request.getProducts().subscribe(
      result => {
        this.products = result;
        this.numOfProducts = this.products.length;
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
        this.categoryName = this.categories.find(n => n.id === this.categoryProducts[1].categoryId).name;
        if (this.product) { this.product = null; }
      });
  }





}





