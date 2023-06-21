import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../service/equipo.service';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from '../model/equipo';

@Component({
  selector: 'app-list-equipo',
  templateUrl: './list-equipo.component.html',
  styleUrls: ['./list-equipo.component.scss']
})
export class ListEquipoComponent implements OnInit{
  equipos!: Equipo[];

  constructor(
    private equipoService: EquipoService,
    private toast: ToastrService
  ) {  }

  ngOnInit(): void {
    this.getTorneo();
  }

  getTorneo(): void {
    this.equipoService.list().subscribe(
      data => {
        this.equipos = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

  onDelete(id: number): void {
        this.equipoService.delete(id);
        window.location.reload()
  }
}
