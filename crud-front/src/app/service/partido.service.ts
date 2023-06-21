import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Partido } from '../model/partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  partidoURL = environment.apiResrURL + '/partidos';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Partido[]> {
    return this.httpClient.get<Partido[]>(this.partidoURL)
  }
}
