import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Equipo } from '../model/equipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipoURL = environment.apiResrURL + '/equipos';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Equipo[]> {
    return this.httpClient.get<Equipo[]>(this.equipoURL)
  }

  public detail(id: number): Observable<Equipo>{
    return this.httpClient.get<Equipo>(this.equipoURL + `/detail/${id}`);
  }

  public create(usuario: Equipo): Observable<any> {
    return this.httpClient.post<any>(this.equipoURL, usuario);
  }

  public update(id: number, usuario: Equipo): Observable<any> {
    return this.httpClient.put<any>(this.equipoURL + `/${id}`, usuario);
  }

  public delete(id: number): void {
    this.httpClient.delete(this.equipoURL + `/${id}`)
        .subscribe(() => console.log('Delete successful'));
  }
}
