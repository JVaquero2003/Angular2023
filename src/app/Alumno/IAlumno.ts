export interface IAlumno {
  id: Number;
  nombre: string;
  apellidos: string;
  direccion: string;
  fnac: string;
  sexo: string;
  //nom_padre?: string;
  //solo es para saber que no es necesario instanciarlo

}

export class Alumno implements IAlumno{

  constructor(public id: number, public nombre: string, public apellidos: string, public direccion: string, public fnac: string, public sexo: string){
  }

}
