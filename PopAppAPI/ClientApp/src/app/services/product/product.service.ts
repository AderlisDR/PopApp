import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetProducts(): Promise<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/product`).toPromise();
  }
  
  GetProduct(id: number): Promise<Product>{
    return this.http.get<Product>(`${this.baseUrl}/product/${id}`).toPromise();
  }
  
  PostProduct(product: Product){
    return this.http.post(`${this.baseUrl}/product` , product).toPromise();
  }
  
  PutProduct(product: Product , id: number){
    return this.http.put(`${this.baseUrl}/product/${id}` , product).toPromise();
  }
  
  DeleteProduct(id: number){
    return this.http.delete(`${this.baseUrl}/product/${id}`).toPromise();
  }

}
