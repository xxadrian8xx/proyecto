import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario: Usuario | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.getUsuario();
  }
  
  getUsuario(): void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.usuarioService.detail(id).subscribe(
        data=> {
          this.usuario = data;
          console.log(this.usuario);
        },
        err => {
          this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
          this.router.navigate(['']);
        }
      )
  }

}
