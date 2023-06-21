import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(formData: FormData): Observable<any>{
    return this.http.post("http://localhost:8080/media/upload", formData);
  }
}
