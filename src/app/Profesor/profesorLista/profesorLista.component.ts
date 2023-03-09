import { Component, OnInit } from '@angular/core';
import { Profesor } from '../Profesor';
import { ProfesorService } from '../Profesor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesorLista',
  templateUrl: './profesorLista.component.html',
  styleUrls: ['./profesorLista.component.css']
})
export class ProfesorListaComponent implements OnInit {

  profesores : Profesor[];
  constructor(private service: ProfesorService , private activatedRoute: ActivatedRoute) {
    this.profesores = [];
  }

  ngOnInit() {
    this.service.getProfesores().subscribe((datosalumnos) => this.profesores = datosalumnos);
  }

}
