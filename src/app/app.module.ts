import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { FormsModule } from '@angular/forms';
import { MostrarAlumnosComponent } from './mostrar-alumnos/mostrar-alumnos.component';
import { AlumnosGrupoComponent } from './alumnos-grupo/alumnos-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAlumnoComponent,
    MostrarAlumnosComponent,
    AlumnosGrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
