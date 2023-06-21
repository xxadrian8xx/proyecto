import { Component, OnInit } from '@angular/core';
import { Torneo } from '../model/torneo';
import { TorneoService } from '../service/torneo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  usuario: any = {}
  torneos!: Torneo[];

  constructor(
    private torneoService: TorneoService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.getTorneo();
    this.usuario = localStorage.getItem("usuario");
    if (this.usuario) {
      this.usuario = JSON.parse(this.usuario);
    }
    
  }

  getTorneo(): void {
    this.torneoService.list().subscribe(
      data => {
        this.torneos = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
    this.torneos.slice(0,3)
  }

}
