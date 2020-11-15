import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Company } from 'src/app/models/company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

GetCompanies(): Promise<Company[]>{
  return this.http.get<Company[]>(`${this.baseUrl}/company`).toPromise();
}

GetCompany(id: number): Promise<Company>{
  return this.http.get<Company>(`${this.baseUrl}/company/${id}`).toPromise();
}

PostCompany(company: Company){
  return this.http.post(`${this.baseUrl}/company` , company).toPromise();
}

PutCompany(company: Company , id: number){
  return this.http.put(`${this.baseUrl}/company/${id}` , company).toPromise();
}

DeleteCompany(id: number){
  return this.http.delete(`${this.baseUrl}/company/${id}`).toPromise();
}


}
