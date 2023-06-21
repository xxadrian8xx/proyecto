import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorInicio: boolean = false;
  loading: boolean = false;
  url:string = "http://localhost:8080/usuarios/login";
  usuario:any = {};
  nUsuario: string = "";
  password: string = "";

  constructor(
    private http: HttpClient
  ){}

  login(){
    let formulario:any = document.getElementById("login");
    let formularioValido:boolean = formulario.reportValidity();
    if(formularioValido){
      this.loading=true;
      this.loginService().subscribe(
        data => this.iniciarSesion(data)
      )
    }
  }

  loginService(){
    var httpOption = {
      headers: new HttpHeaders({
        'Conten-Type':'application/json'
      })
    }
    
    return this.http.get<Usuario>(this.url + "/" + this.nUsuario+ "/" + this.password, this.usuario)
  }
  
  iniciarSesion(resultado:any){
    this.loading=false;
    if(resultado){
      localStorage.setItem("usuario",JSON.stringify(resultado));
      location.href = "/inicio"
    }else{
      this.errorInicio = true;
    }

  }



}
