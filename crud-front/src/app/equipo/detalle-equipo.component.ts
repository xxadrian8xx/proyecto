import { Component } from '@angular/core';
import { Equipo } from '../model/equipo';
import { EquipoService } from '../service/equipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.scss']
})
export class DetalleEquipoComponent {

  equipo: Equipo | undefined;

  constructor(
    private equipoService: EquipoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    this.getTorneo();
  }
  
  getTorneo(): void{
      const id = this.activatedRoute.snapshot.params['id'];
      this.equipoService.detail(id).subscribe(
        data=> {
          this.equipo = data;
          console.log(this.equipo);
        },
        err => {
          this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
          this.router.navigate(['']);
        }
      )
  }

}
