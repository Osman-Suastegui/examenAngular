import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: { nombre: String, grupo: String, numeroDeCuenta: String }[] = [];

  agregarRegistro(registro: { nombre: String, grupo: String, numeroDeCuenta: String }) {
    this.alumnos.push(registro);
  }
  editarRegistro(registro: { nombre: String, grupo: String, numeroDeCuenta: String }) {
    
    this.alumnos = this.alumnos.map(r => {
      if (r.numeroDeCuenta === registro.numeroDeCuenta) {
        return registro;
      } else {
        return r;
      }
    });
  }
  eliminarRegistro(numeroDeCuenta:  String) {
    // Buscar el registro por número de cuenta y realizar la lógica de eliminación
      this.alumnos = this.alumnos.filter(r => r.numeroDeCuenta !== numeroDeCuenta);
  }
}
