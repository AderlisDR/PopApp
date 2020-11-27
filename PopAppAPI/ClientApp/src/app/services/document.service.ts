import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Document } from '../models/document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetDocuments(): Promise<Document[]> {
    return this.http.get<Document[]>(`${this.baseUrl}api/documents`).toPromise();
  }

  GetDocument(id: number): Promise<Document> {
    return this.http.get<Document>(`${this.baseUrl}api/documents/${id}`).toPromise();
  }

  PostDocument(document: Document) {
    return this.http.post(`${this.baseUrl}api/documents` , document).toPromise();
  }

  PutDocument(document: Document , id: number) {
    return this.http.put(`${this.baseUrl}api/documents/${id}` , document).toPromise();
  }

  DeleteDocument(id: number) {
    return this.http.delete(`${this.baseUrl}api/documents/${id}`).toPromise();
  }

}
