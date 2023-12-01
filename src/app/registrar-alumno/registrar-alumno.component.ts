import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent {
  numeroDeCuenta:String = "";
  grupo:String = "";
  nombre:String = "";
  @Output() registroRealizado = new EventEmitter<{ nombre: String, grupo: String, numeroDeCuenta: String }>();

registrarUsuario() {
  throw new Error('Method not implemented.');
}
enviarRegistro(){
  this.registroRealizado.emit({ nombre: this.nombre, grupo: this.grupo, numeroDeCuenta: this.numeroDeCuenta });
}


}
