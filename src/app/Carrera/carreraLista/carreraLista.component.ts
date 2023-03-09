import { Carrera } from './../Carrera';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/Profesor/Profesor';
import { ProfesorService } from 'src/app/Profesor/Profesor.service';
import { ActivatedRoute } from '@angular/router';
import { CarreraService } from '../Carrera.service';


@Component({
  selector: 'app-carreraLista',
  templateUrl: './carreraLista.component.html',
  styleUrls: ['./carreraLista.component.css']
})
export class CarreraListaComponent implements OnInit {

  carreras : Carrera[];
  constructor(private service: CarreraService, private activatedRoute: ActivatedRoute)
  {
    this.carreras = [];
  }

  ngOnInit() {
    this.service.getCarreras().subscribe((datosCarreras) => this.carreras = datosCarreras);
  }

}
