import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from '../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetProducts(): Promise<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}api/products`).toPromise();
  }

  GetProduct(id: number): Promise<Product>{
    return this.http.get<Product>(`${this.baseUrl}api/products/${id}`).toPromise();
  }

  PostProduct(product: Product){
    return this.http.post(`${this.baseUrl}api/products` , product).toPromise();
  }

  PutProduct(product: Product , id: number){
    return this.http.put(`${this.baseUrl}api/products/${id}` , product).toPromise();
  }

  DeleteProduct(id: number){
    return this.http.delete(`${this.baseUrl}api/products/${id}`).toPromise();
  }

  GetAvailableProductsByFreigthId(freigthId: number) {
    return this.http.get<Product[]>(`${this.baseUrl}api/products/available-for-freigth/${freigthId}`).toPromise();
  }

}
