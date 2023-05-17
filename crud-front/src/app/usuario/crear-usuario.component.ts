import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Equipo } from '../model/equipo';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  nombre!: string;
  apellido1!: string;
  apellido2!: string;
  usuario!: string;
  password!: string;
  rol!: string;
  email!: string;
  telefono!: string;
  equipo!:Equipo;

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    
    const usu = new Usuario(this.nombre, this.apellido1, this.apellido2, this.usuario, this.password, this.rol, this.email, this.telefono, this.equipo);
    this.usuarioService.create(usu).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

}
