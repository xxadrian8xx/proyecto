import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit{

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastrService
  ) {  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.list().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

}
