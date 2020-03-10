import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient ) { }

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


  getCategories(): Observable<any> {
    return this.http.get('../../assets/data/categories.json');
  }


  getProducts(): Observable<any> {
    return this.http.get('../../assets/data/products.json');
  }

  getServices(): Observable<any> {
    return this.http.get('../../assets/data/services.json');
  }

}
