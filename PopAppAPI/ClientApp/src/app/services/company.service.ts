import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Company } from '../models/company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetCompanies(): Promise<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}api/companies`).toPromise();
  }

  GetCompany(id: number): Promise<Company> {
    return this.http.get<Company>(`${this.baseUrl}api/company/${id}`).toPromise();
  }

  PostCompany(company: Company) {
    return this.http.post(`${this.baseUrl}api/companies` , company).toPromise();
  }

  PutCompany(company: Company , id: number) {
    return this.http.put(`${this.baseUrl}api/company/${id}` , company).toPromise();
  }

  DeleteCompany(id: number) {
    return this.http.delete(`${this.baseUrl}api/company/${id}`).toPromise();
  }
}
