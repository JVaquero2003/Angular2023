import { Injectable } from '@angular/core';
import { Profesor } from './Profesor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

constructor(private _http: HttpClient) { }

getProfesores(): Observable<Profesor[]>{
  return this._http.get<Profesor[]>("http://localhost:50843/api/Profesores");

}
getProfesor(ID: Number): Observable<Profesor>{
  return this._http.get<Profesor>("http://localhost:50843/api/Profesores/" + ID);

}

}
