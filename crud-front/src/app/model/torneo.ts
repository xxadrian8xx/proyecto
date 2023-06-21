import { Equipo } from "./equipo";
import { Partido } from "./partido";
import { Usuario } from "./usuario";

export class Torneo {
    id!: number;
    nombre: string;
    fecha_inicio: string;
    deporte: string;
    tamano: number;
    nivel: string;
    partidos: Partido[];
    equipos: Equipo[];
    jugadores: Usuario[];

    constructor(nombre: string, fecha_inicio: string, deporte: string, tamano: number, nivel: string, partidos: Partido[], equipos: Equipo[], jugadores: Usuario[]){
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.deporte = deporte;
        this.tamano = tamano;
        this.nivel = nivel;
        this.partidos = partidos;
        this.equipos = equipos;
        this.jugadores = jugadores
    }
}
