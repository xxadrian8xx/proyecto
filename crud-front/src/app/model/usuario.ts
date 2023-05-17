import { Equipo } from "./equipo";

export class Usuario {
    id!: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    usuario: string;
    password: string;
    rol: string;
    email: string;
    telefono: string;
    equipo: Equipo;

    constructor(nombre: string, apellido1: string, apellido2: string, usuario: string, password: string, rol: string, email: string, telefono: string, equipo: Equipo){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.usuario = usuario;
        this.password = password;
        this.rol = rol;
        this.email = email;
        this.telefono = telefono;
        this.equipo = equipo;
    }

}
