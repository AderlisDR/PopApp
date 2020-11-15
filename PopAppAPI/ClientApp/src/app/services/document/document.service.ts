import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient , @Inject('BASE_URL') private baseUrl: string) { }

  GetDocuments(): Promise<Document[]>{
    return this.http.get<Document[]>(`${this.baseUrl}/document`).toPromise();
  }
  
  GetDocument(id: number): Promise<Document>{
    return this.http.get<Document>(`${this.baseUrl}/document/${id}`).toPromise();
  }
  
  PostDocument(document: Document){
    return this.http.post(`${this.baseUrl}/document` , document).toPromise();
  }
  
  PutDocument(document: Document , id: number){
    return this.http.put(`${this.baseUrl}/document/${id}` , document).toPromise();
  }
  
  DeleteDocument(id: number){
    return this.http.delete(`${this.baseUrl}/document/${id}`).toPromise();
  }

}
