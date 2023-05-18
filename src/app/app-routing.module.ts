import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEquipoComponent } from './equipo/list-equipo.component';
import { ListUsuarioComponent } from './usuario/list-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'usuarios', component: ListUsuarioComponent},
  {path: 'usuarios/detail/:id', component: DetalleUsuarioComponent},
  {path: 'usuarios/create', component: CrearUsuarioComponent},
  {path: 'usuarios/update/:id', component: DetalleUsuarioComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
