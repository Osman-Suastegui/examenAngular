import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mostrar-alumnos',
  templateUrl: './mostrar-alumnos.component.html',
  styleUrls: ['./mostrar-alumnos.component.css']
})
export class MostrarAlumnosComponent {
  @Input() alumnos: { nombre: String, grupo: String, numeroDeCuenta: String }[] = [];
  

  @Output() editarRegistro = new EventEmitter<{ nombre: String, grupo: String, numeroDeCuenta: String }>();
  @Output() eliminarRegistro = new EventEmitter<String>();

  editar(registro: { nombre: String, grupo: String, numeroDeCuenta: String }) {
    this.editarRegistro.emit(registro);
  }

  eliminar(numeroDeCuenta:String ) {
    
    this.eliminarRegistro.emit(numeroDeCuenta);
  }

}
