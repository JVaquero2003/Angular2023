import { Component, OnInit } from '@angular/core';
import { Profesor } from './Profesor';
import { ProfesorService } from './Profesor.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores : Profesor;
  constructor(private service: ProfesorService , private activatedRoute: ActivatedRoute) {
    this.profesores = new Profesor(1,"","","","",1);
  }

  ngOnInit() {
    let idProfesor = this.activatedRoute.snapshot.params['ID'];
    this.service.getProfesor(idProfesor).subscribe((datosProfesor => this.profesores = datosProfesor));
  }

}
