import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CommonStatistics } from '../models/dashboard/common-statistics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetCommonStatistics(): Promise<CommonStatistics>{
    return this.http.get<CommonStatistics>(`${this.baseUrl}api/dashboard/common-statistics`).toPromise();
  }

}
