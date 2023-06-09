import { Component, OnInit } from '@angular/core';
import { Torneo } from '../model/torneo';
import { TorneoService } from '../service/torneo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-torneo',
  templateUrl: './list-torneo.component.html',
  styleUrls: ['./list-torneo.component.scss']
})
export class ListTorneoComponent implements OnInit{

  torneos!: Torneo[];

  constructor(
    private torneoService: TorneoService,
    private toast: ToastrService
  ) {  }

  ngOnInit(): void {
    this.getTorneo();
  }

  getTorneo(): void {
    this.torneoService.list().subscribe(
      data => {
        this.torneos = data;
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
  }

  onDelete(id: number): void {
        this.torneoService.delete(id)
  }

}
