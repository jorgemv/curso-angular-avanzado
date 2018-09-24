import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public titulo: string;
  public nombreParque: string;
  public miParque: string;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  mostrarNombre() {
    console.log(this.nombreParque);
  }

  verDatosParque(event) {
    this.miParque = event;
  }

}
