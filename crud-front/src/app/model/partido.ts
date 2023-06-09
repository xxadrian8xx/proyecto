import { Equipo } from "./equipo";
import { Torneo } from "./torneo";

export class Partido {
    id!: number;
    resultado: number[];
    local: Equipo;
    visitante: Equipo;
    torneo: Torneo;
    
    constructor(resultado: number[], local: Equipo, visitante: Equipo, torneo: Torneo){
        this.resultado = resultado;
        this.local = local;
        this.visitante = visitante;
        this.torneo = torneo;
    }
}
