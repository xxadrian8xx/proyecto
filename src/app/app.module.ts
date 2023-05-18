import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// external
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';

// components
import { ListEquipoComponent } from './equipo/list-equipo.component';
import { DetalleEquipoComponent } from './equipo/detalle-equipo.component';
import { ModificarEquipoComponent } from './equipo/modificar-equipo.component';
import { CrearEquipoComponent } from './equipo/crear-equipo.component';
import { CrearTorneoComponent } from './torneo/crear-torneo.component';
import { DetalleTorneoComponent } from './torneo/detalle-torneo.component';
import { ListTorneoComponent } from './torneo/list-torneo.component';
import { ModificarTorneoComponent } from './torneo/modificar-torneo.component';
import { ListPartidoComponent } from './partido/list-partido.component';
import { ListUsuarioComponent } from './usuario/list-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';
import { ModificarUsuarioComponent } from './usuario/modificar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCortoComponent } from './menu/menu-corto.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEquipoComponent,
    DetalleEquipoComponent,
    ModificarEquipoComponent,
    CrearEquipoComponent,
    CrearTorneoComponent,
    DetalleTorneoComponent,
    ListTorneoComponent,
    ModificarTorneoComponent,
    ListPartidoComponent,
    ListUsuarioComponent,
    DetalleUsuarioComponent,
    ModificarUsuarioComponent,
    EliminarUsuarioComponent,
    MenuComponent,
    MenuCortoComponent,
    InicioComponent,
    CrearUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
