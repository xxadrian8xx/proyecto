import { Component } from '@angular/core';
import { Torneo } from '../model/torneo';
import { Usuario } from '../model/usuario';
import { Partido } from '../model/partido';
import { EquipoService } from '../service/equipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Equipo } from '../model/equipo';
import { MediaServiceService } from '../service/media-service.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.scss']
})
export class CrearEquipoComponent {
  nombre!: string;
  logo!: string;
  descripcion!: string;
  historial!: Partido[];
  jugadores!: Usuario[];
  torneosInstrito!: Torneo[];
  url!: string;


  constructor(
    private equipoService: EquipoService,
    private toast: ToastrService,
    private router: Router,
    private mediaService: MediaServiceService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {

    const equipo = new Equipo(this.nombre, this.url, this.descripcion, this.historial, this.jugadores, this.torneosInstrito);
    this.equipoService.create(equipo).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }

  upload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.mediaService.uploadFile(formData)
        .subscribe(response => {
          console.log('response', response);
          this.url = response.url;
        })
    }
  }
}
