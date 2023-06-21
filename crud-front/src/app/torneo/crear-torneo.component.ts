import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../service/torneo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Equipo } from '../model/equipo';
import { Torneo } from '../model/torneo';
import { Partido } from '../model/partido';

@Component({
  selector: 'app-crear-torneo',
  templateUrl: './crear-torneo.component.html',
  styleUrls: ['./crear-torneo.component.scss']
})
export class CrearTorneoComponent implements OnInit{
  
  nombre!: string;
  fecha_inicio!: string;
  deporte!: string;
  tamaño!: number;
  nivel!: string;
  partidos!: Partido[];
  equipo!:Equipo[];
  lista:string[]=["Futbol","Baloncesto","Voley", "Rugby", "Natacion"];

  constructor(
    private torneoService: TorneoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    
    const tor = new Torneo(this.nombre, this.fecha_inicio, this.deporte, this.tamaño, this.nivel, this.partidos, this.equipo);
    this.torneoService.create(tor).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Formateo de Fecha incorrecto', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }
}
