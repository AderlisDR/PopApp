import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Freigth } from 'src/app/models/freigth/freigth';

@Injectable({
  providedIn: 'root'
})
export class FreigthService {



constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetFreigths(): Promise<Freigth[]>{
    return this.http.get<Freigth[]>(`${this.baseUrl}/freigth`).toPromise();
  }
  
  GetFreigth(id: number): Promise<Freigth>{
    return this.http.get<Freigth>(`${this.baseUrl}/freigth/${id}`).toPromise();
  }
  
  PostFreigth(freigth: Freigth){
    return this.http.post(`${this.baseUrl}/freigth` , freigth).toPromise();
  }
  
  PutFreigth(freigth: Freigth , id: number){
    return this.http.put(`${this.baseUrl}/freigth/${id}` , freigth).toPromise();
  }
  
  DeleteFreigth(id: number){
    return this.http.delete(`${this.baseUrl}/freigth/${id}`).toPromise();
  }

}
