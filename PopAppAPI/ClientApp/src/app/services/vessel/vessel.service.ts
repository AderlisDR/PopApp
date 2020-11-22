import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Vessel } from '../../models/vessel/vessel';
import { VesselCombo } from '../../models/vessel/vessel-combo';

@Injectable({
  providedIn: 'root'
})
export class VesselService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetVessels(): Promise<Vessel[]>{
    return this.http.get<Vessel[]>(`${this.baseUrl}api/vessels`).toPromise();
  }

  GetVessel(id: number): Promise<Vessel>{
    return this.http.get<Vessel>(`${this.baseUrl}api/vessels/${id}`).toPromise();
  }

  PostVessel(vessel: Vessel){
    return this.http.post(`${this.baseUrl}api/vessels` , vessel).toPromise();
  }

  PutVessel(vessel: Vessel , id: number){
    return this.http.put(`${this.baseUrl}api/vessels/${id}` , vessel).toPromise();
  }

  DeleteVessel(id: number){
    return this.http.delete(`${this.baseUrl}api/vessels/${id}`).toPromise();
  }

  GetVesselCombo(): Promise<VesselCombo[]> {
    return this.http.get<VesselCombo[]>(`${this.baseUrl}api/vessels/for-combo`).toPromise();
  }

}
