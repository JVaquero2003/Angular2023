import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrera } from './Carrera';
import { CarreraService } from './Carrera.service';
import { ProfesorService } from 'src/app/Profesor/Profesor.service';
import { Profesor } from 'src/app/Profesor/Profesor';

@Component({
  selector: 'app-Carrera',
  templateUrl: './Carrera.component.html',
  styleUrls: ['./Carrera.component.css']
})
export class CarreraComponent implements OnInit {
  profesores : Profesor[];
  carreras : Carrera
  constructor(private service: CarreraService, private activatedRoute: ActivatedRoute, private service1 : ProfesorService) {
    this.carreras = new Carrera(1,"");
    this.profesores = [];
   }

  ngOnInit() {
    let idCarrera = this.activatedRoute.snapshot.params['ID'];
    this.service.getCarrera(idCarrera).subscribe((datosCarrera => this.carreras = datosCarrera));
    this.service1.getProfesores().subscribe((datosalumnos) => this.profesores = datosalumnos);

  }

}
