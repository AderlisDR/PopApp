import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Vessel } from '../../models/vessel/vessel';

@Injectable({
  providedIn: 'root'
})
export class VesselService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetVessels(): Promise<Vessel[]>{
    return this.http.get<Vessel[]>(`${this.baseUrl}/vessel`).toPromise();
  }
  
  GetVessel(id: number): Promise<Vessel>{
    return this.http.get<Vessel>(`${this.baseUrl}/vessel/${id}`).toPromise();
  }
  
  PostVessel(vessel: Vessel){
    return this.http.post(`${this.baseUrl}/vessel` , vessel).toPromise();
  }
  
  PutVessel(vessel: Vessel , id: number){
    return this.http.put(`${this.baseUrl}/vessel/${id}` , vessel).toPromise();
  }
  
  DeleteVessel(id: number){
    return this.http.delete(`${this.baseUrl}/vessel/${id}`).toPromise();
  }

}
