import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../model/usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit{

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastrService,
    private router: Router
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

  onDelete(id: number): void {
    this.usuarioService.delete(id)
    window.location.reload()
  }
  
}
