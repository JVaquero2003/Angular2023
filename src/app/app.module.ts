import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/alumnoLista/alumnoLista.component';
import { AlumnoTituloPipe } from './Alumno/alumnoLista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumnoCount/alumnoCount.component';
import { ProfesorComponent } from './Profesor/Profesor.component';
import { ProfesorListaComponent } from './Profesor/profesorLista/profesorLista.component';
import { CarreraComponent } from './Carrera/Carrera.component';
import { CarreraListaComponent } from './Carrera/carreraLista/carreraLista.component';

const appRutas: Routes = [
  { path: 'Alumno', component: AlumnoListaComponent},
  { path: 'Alumno/:id', component: AlumnoComponent},
  { path: 'Profesor', component: ProfesorListaComponent},
  { path: 'Profesor/:ID', component: ProfesorComponent},
  { path: 'Carrera', component: CarreraListaComponent},
  { path: 'Carrera/:ID', component: CarreraComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnoTituloPipe,
    AlumnoCountComponent,
    ProfesorComponent,
    ProfesorListaComponent,
    CarreraComponent,
    CarreraListaComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
