import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { Router } from '@angular/router';
import { ProductsComponent } from '../app/components/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProverbsMedical';

  constructor(private route: Router,
              private product: ProductsComponent,
              private request: RequestService) { }

  categories: Array<any>;

  ngOnInit(): void {
    this.getCategories();
  }
  goToHome() {
    this.route.navigate(['/']);
  }

  getCategories() {
    this.request.getCategories().subscribe(
      result => {
        this.categories = result;
      });
  }

}
