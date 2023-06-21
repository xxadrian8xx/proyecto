import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PartidoService } from '../service/partido.service';
import { Partido } from '../model/partido';

@Component({
  selector: 'app-list-partido',
  templateUrl: './list-partido.component.html',
  styleUrls: ['./list-partido.component.scss']
})
export class ListPartidoComponent implements OnInit{
  
  partidos: Partido[] = [];

  constructor(
    private partidoService: PartidoService,
    private toast: ToastrService
  ) {  }

  ngOnInit(): void {
    this.getPartidos();
  }

  getPartidos(): void {
    this.partidoService.list().subscribe(
      data => {
        this.partidos = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }
}
