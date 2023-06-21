import { Component, OnInit } from '@angular/core';
import { Torneo } from '../model/torneo';
import { TorneoService } from '../service/torneo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-detalle-torneo',
  templateUrl: './detalle-torneo.component.html',
  styleUrls: ['./detalle-torneo.component.scss']
})
export class DetalleTorneoComponent implements OnInit {
  torneo: Torneo | undefined;
  

  constructor(
    private torneoService: TorneoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.getTorneo();
  }
  
  getTorneo(): void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.torneoService.detail(id).subscribe(
        data=> {
          this.torneo = data;
          console.log(this.torneo);
        },
        err => {
          this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
          this.router.navigate(['']);
        }
      )
  }


}
