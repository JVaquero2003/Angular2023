import { Injectable } from '@angular/core';
import { Alumno } from './IAlumno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

constructor(private _http: HttpClient) { }

getAlumnos(): Observable<Alumno[]>{
  return this._http.get<Alumno[]>("http://localhost:50843/api/Alumnos");

}
getAlumno(id: Number): Observable<Alumno>{
  return this._http.get<Alumno>("http://localhost:50843/api/Alumnos/" + id);

}

}
