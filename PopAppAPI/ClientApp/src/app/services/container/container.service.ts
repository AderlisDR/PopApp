import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Container } from '../../models/container/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetContainers(): Promise<Container[]>{
    return this.http.get<Container[]>(`${this.baseUrl}api/containers`).toPromise();
  }
  
  GetContainer(id: number): Promise<Container>{
    return this.http.get<Container>(`${this.baseUrl}api/containers/${id}`).toPromise();
  }
  
  PostContainer(container: Container){
    return this.http.post(`${this.baseUrl}api/containers` , container).toPromise();
  }
  
  PutContainer(container: Container , id: number){
    return this.http.put(`${this.baseUrl}api/containers/${id}` , container).toPromise();
  }
  
  DeleteContainer(id: number){
    return this.http.delete(`${this.baseUrl}api/containers/${id}`).toPromise();
  }

}
