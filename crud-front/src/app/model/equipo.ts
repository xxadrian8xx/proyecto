import { Partido } from "./partido";
import { Usuario } from "./usuario";
import { Torneo } from "./torneo";

export class Equipo {
    id!: number;
    nombre: string;
    descripcion: string;
    historial: Partido[];
    jugadores: Usuario[];
    torneosInstrito: Torneo[];

    constructor(nombre: string, url: string, descripcion: string, historial: Partido[], jugadores: Usuario[], torneosInstrito: Torneo[]){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.historial = historial;
        this.jugadores = jugadores;
        this.torneosInstrito = torneosInstrito;
    }
}

