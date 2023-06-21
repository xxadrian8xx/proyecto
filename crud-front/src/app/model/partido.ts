import { Equipo } from "./equipo";
import { Torneo } from "./torneo";

export class Partido {
    id!: number;
    local: string;
    visitante: string;
    resultadoLocal: number;
    resultadoVisitante: number;
    torneo: Torneo;
    
    constructor(local: string, visitante: string, torneo: Torneo, resultadoLocal: number,  resultadoVisitante: number){
        this.resultadoLocal = resultadoLocal;
        this.resultadoVisitante = resultadoVisitante;
        this.local = local;
        this.visitante = visitante;
        this.torneo = torneo;
    }
}
