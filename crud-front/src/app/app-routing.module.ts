import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEquipoComponent } from './equipo/list-equipo.component';
import { ListUsuarioComponent } from './usuario/list-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModificarUsuarioComponent } from './usuario/modificar-usuario.component';
import { ListTorneoComponent } from './torneo/list-torneo.component';
import { CrearTorneoComponent } from './torneo/crear-torneo.component';
import { DetalleTorneoComponent } from './torneo/detalle-torneo.component';
import { ModificarTorneoComponent } from './torneo/modificar-torneo.component';
import { DetalleEquipoComponent } from './equipo/detalle-equipo.component';
import { CrearEquipoComponent } from './equipo/crear-equipo.component';
import { ModificarEquipoComponent } from './equipo/modificar-equipo.component';
import { ListPartidoComponent } from './partido/list-partido.component';
import { LoginComponent } from './inicio/login/login.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'usuarios', component: ListUsuarioComponent},
  {path: 'usuarios/detail/:id', component: DetalleUsuarioComponent},
  {path: 'usuarios/create', component: CrearUsuarioComponent},
  {path: 'usuarios/update/:id', component: ModificarUsuarioComponent},
  {path: 'equipos', component: ListEquipoComponent},
  {path: 'equipos/detail/:id', component: DetalleEquipoComponent},
  {path: 'equipos/create', component: CrearEquipoComponent},
  {path: 'equipos/update/:id', component: ModificarEquipoComponent},
  {path: 'torneos', component: ListTorneoComponent},
  {path: 'torneos/detail/:id', component: DetalleTorneoComponent},
  {path: 'torneos/create', component: CrearTorneoComponent},
  {path: 'torneos/update/:id', component: ModificarTorneoComponent},
  {path: 'partidos', component: ListPartidoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
