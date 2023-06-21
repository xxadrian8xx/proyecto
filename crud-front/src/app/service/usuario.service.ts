import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  
  usuarioURL = environment.apiResrURL + '/usuarios';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL)
  }

  public detail(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.usuarioURL + `/detail/${id}`);
  }

  public create(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL, usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `/${id}`, usuario);
  }

  public delete(id: number): void {
    this.httpClient.delete(this.usuarioURL + `/${id}`)
        .subscribe(() => console.log('Delete successful'));
  }
  
}
