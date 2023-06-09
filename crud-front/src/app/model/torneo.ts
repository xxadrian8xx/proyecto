import { Equipo } from "./equipo";
import { Partido } from "./partido";

export class Torneo {
    id!: number;
    nombre: string;
    fecha_inicio: string;
    deporte: string;
    tamaño: number;
    nivel: string;
    partidos: Partido[];
    equipos: Equipo[];

    constructor(nombre: string, fecha_inicio: string, deporte: string, tamaño: number, nivel: string, partidos: Partido[], equipos: Equipo[]){
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.deporte = deporte;
        this.tamaño = tamaño;
        this.nivel = nivel;
        this.partidos = partidos;
        this.equipos = equipos;
    }
}
