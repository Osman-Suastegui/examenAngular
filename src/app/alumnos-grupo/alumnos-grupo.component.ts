import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alumnos-grupo',
  templateUrl: './alumnos-grupo.component.html',
  styleUrls: ['./alumnos-grupo.component.css']
})
export class AlumnosGrupoComponent {
  @Input() alumnos: { nombre: String, grupo: String, numeroDeCuenta: String }[] = [];


   get grupos(): String[] {
    // Obtener una lista de grupos únicos
    return Array.from(new Set(this.alumnos.map(alumno => alumno.grupo)));
  }

  contarAlumnosPorGrupo(grupo: String): number {
    // Contar la cantidad de alumnos en un grupo específico
    return this.alumnos.filter(alumno => alumno.grupo === grupo).length;
  }
}
