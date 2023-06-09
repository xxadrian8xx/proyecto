import { Partido } from "./partido";
import { Usuario } from "./usuario";
import { Torneo } from "./torneo";

export class Equipo {
    id!: number;
    nombre: string;
    logo: string;
    descripcion: string;
    historial: Partido[];
    jugadores: Usuario[];
    torneosInstrito: Torneo[];

    constructor(nombre: string, logo: string, descripcion: string, historial: Partido[], jugadores: Usuario[], torneosInstrito: Torneo[]){
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.historial = historial;
        this.jugadores = jugadores;
        this.torneosInstrito = torneosInstrito;
    }
}

