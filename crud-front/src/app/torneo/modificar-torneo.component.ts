import { Component, OnInit } from '@angular/core';
import { TorneoService } from '../service/torneo.service';
import { Torneo } from '../model/torneo';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-torneo',
  templateUrl: './modificar-torneo.component.html',
  styleUrls: ['./modificar-torneo.component.scss']
})
export class ModificarTorneoComponent implements OnInit{
  id!: number;
  torneo!: Torneo;

  constructor(
    private torneoService: TorneoService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  onUpdate(): void {
    this.torneoService.update(this.id, this.torneo).subscribe(
      data => {
        this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }

  getUsuario(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.torneoService.detail(this.id).subscribe(
      data => {
        this.torneo = data;
        console.log(this.torneo);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      }
    );
  }

}
