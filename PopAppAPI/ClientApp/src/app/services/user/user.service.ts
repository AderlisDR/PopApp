import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetUsers(): Promise<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/user`).toPromise();
  }
  
  GetUser(id: number): Promise<User>{
    return this.http.get<User>(`${this.baseUrl}/user/${id}`).toPromise();
  }
  
  PostUser(user: User){
    return this.http.post(`${this.baseUrl}/user` , user).toPromise();
  }
  
  PutUser(user: User , id: number){
    return this.http.put(`${this.baseUrl}/user/${id}` , user).toPromise();
  }
  
  DeleteUser(id: number){
    return this.http.delete(`${this.baseUrl}/user/${id}`).toPromise();
  }

}
