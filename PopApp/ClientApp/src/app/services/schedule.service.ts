import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from '../models/product/product';
import { Schedule } from '../models/schedule/schedule';
import { ScheduleContainer } from '../models/schedule/schedule-container';
import { ScheduleContainerFreigth } from '../models/schedule/schedule-container-freigth';
import { Vessel } from '../models/vessel/vessel';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetSchedules(): Promise<Schedule[]>{
    return this.http.get<Schedule[]>(`${this.baseUrl}api/schedule`).toPromise();
  }

  GetSchedule(id: number): Promise<Schedule>{
    return this.http.get<Schedule>(`${this.baseUrl}api/schedule/${id}`).toPromise();
  }

  PostSchedule(request: Schedule) {
    return this.http.post(`${this.baseUrl}api/schedule`, request).toPromise();
  }

  GetScheduleVessel(id: number) {
    return this.http.get<Vessel>(`${this.baseUrl}api/schedule/${id}/vessel`).toPromise();
  }

  GetScheduleVesselContainers(id: number) {
    return this.http.get<ScheduleContainer[]>(`${this.baseUrl}api/schedule/${id}/vessel-containers`).toPromise();
  }

  AddContainerToScheduleVessel(scheduleId: number, containerId: number) {
    return this.http.post(`${this.baseUrl}api/schedule/${scheduleId}/add-vessel-container`, containerId).toPromise();
  }

  AddMultipleContainersToScheduleVessel(request: { scheduleId: number, containersId: number[] }) {
    return this.http.post(`${this.baseUrl}api/schedule/add-multiple-vessel-container`, request).toPromise();
  }

  AddFreigthToScheduleVesselContainer(request: { scheduleVesselContainerId: number, freigthId: number }) {
    return this.http.post(`${this.baseUrl}api/schedule/add-freigth-to-schedule-vessel-container`, request).toPromise();
  }

  GetScheduleContainerFreigths(id: number) {
    return this.http.get<ScheduleContainerFreigth[]>(`${this.baseUrl}api/schedule/${id}/vessel-container-freigths`).toPromise();
  }

  GetScheduleContainerFreigthProducts(containerFreigthId: number) {
    return this.http.get<Product[]>(`${this.baseUrl}api/schedule/${containerFreigthId}/container-freigth-products`).toPromise();
  }

  AddProductToScheduleVesselContainerFreigth(request: { scheduleVesselContainerFreigthId: number, productId: number }) {
    return this.http.post(`${this.baseUrl}api/schedule/add-product-to-schedule-vessel-container-freigth`, request).toPromise();
  }

  RemoveProductFromScheduleVesselContainerFreigth(scheduleVesselContainerFreigthId: number, productId: number) {
    return this.http.delete(`${this.baseUrl}api/schedule/schedule-vessel-container-freigth/${scheduleVesselContainerFreigthId}/remove-product/${productId}`).toPromise();
  }

  ApproveScheduleContainerFreigth(scheduleContainerFreigthId: number) {
    return this.http.put(`${this.baseUrl}api/schedule/approve-schedule-container-freigth/${scheduleContainerFreigthId}`, null).toPromise();
  }

  ReportScheduleContainerFreigth(request: { scheduleContainerFreigthId: number, message: string }) {
    return this.http.put(`${this.baseUrl}api/schedule/report-schedule-container-freigth`, request).toPromise();
  }
}
