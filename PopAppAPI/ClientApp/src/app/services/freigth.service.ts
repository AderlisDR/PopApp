import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Freigth } from '../models/freigth/freigth';

@Injectable({
  providedIn: 'root'
})
export class FreigthService {



constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetFreigths(): Promise<Freigth[]>{
    return this.http.get<Freigth[]>(`${this.baseUrl}api/freigths`).toPromise();
  }

  GetFreigth(id: number): Promise<Freigth>{
    return this.http.get<Freigth>(`${this.baseUrl}api/freigths/${id}`).toPromise();
  }

  PostFreigth(freigth: Freigth){
    return this.http.post(`${this.baseUrl}api/freigths` , freigth).toPromise();
  }

  PutFreigth(freigth: Freigth , id: number){
    return this.http.put(`${this.baseUrl}api/freigths/${id}` , freigth).toPromise();
  }

  DeleteFreigth(id: number){
    return this.http.delete(`${this.baseUrl}api/freigths/${id}`).toPromise();
  }

}
