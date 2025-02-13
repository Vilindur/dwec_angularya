import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre:string = 'Alejandro';
  fumador=false;
  notas:Array<number> = [8.6,1.33,6.11,7.25];
  edad:number = 24;
  contador:number = 0;

  esfumador() {
    return this.fumador?"sí es fumador":"no es fumador";
  }

  provincias = [
    {id:1, nombre:"Huelva"},
    {id:2, nombre:"Málaga"},
    {id:3, nombre:"Cádiz"},
    {id:4, nombre:"Sevilla"}
  ];

  pulsarBoton() {
    alert("Botón pulsado");
  }

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
