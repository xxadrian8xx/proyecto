import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Torneo } from '../model/torneo';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  torneoURL = environment.apiResrURL + '/torneos';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Torneo[]> {
    return this.httpClient.get<Torneo[]>(this.torneoURL)
  }

  public detail(id: number): Observable<Torneo>{
    return this.httpClient.get<Torneo>(this.torneoURL + `/detail/${id}`);
  }

  public create(torneo: Torneo): Observable<any> {
    return this.httpClient.post<any>(this.torneoURL, torneo);
  }

  public update(id: number, torneo: Torneo): Observable<any> {
    return this.httpClient.put<any>(this.torneoURL + `/${id}`, torneo);
  }

  public delete(id: number): void {
    this.httpClient.delete(this.torneoURL + `/${id}`)
        .subscribe(() => console.log('Delete successful'));
  }
  
  
}
