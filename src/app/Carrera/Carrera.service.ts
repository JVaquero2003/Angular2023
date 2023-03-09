import { Profesor } from 'src/app/Profesor/Profesor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from './Carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

constructor(private _http: HttpClient) { }

getCarreras(): Observable<Carrera[]>{
  return this._http.get<Carrera[]>("http://localhost:50843/api/Carrera/");

}
/* getProfesores(): Observable<Profesor[]>{
  return this._http.get<Profesor[]>("http://localhost:50843/api/Profesores");

} */
getCarrera(ID: Number): Observable<Carrera>{
  return this._http.get<Carrera>("http://localhost:50843/api/Carrera/" + ID);

}
}
