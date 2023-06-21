import { Component } from '@angular/core';
import { TorneoService } from '../service/torneo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../model/equipo';
import { EquipoService } from '../service/equipo.service';

@Component({
  selector: 'app-modificar-equipo',
  templateUrl: './modificar-equipo.component.html',
  styleUrls: ['./modificar-equipo.component.scss']
})
export class ModificarEquipoComponent {
  id!: number;
  equipo!: Equipo;

  constructor(
    private equipoService: EquipoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getEquipo();
  }

  onUpdate(): void {
    this.equipoService.update(this.id, this.equipo).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }

  getEquipo(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.equipoService.detail(this.id).subscribe(
      data => {
        this.equipo = data;
        console.log(this.equipo);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      }
    );
  }
}
