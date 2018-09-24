import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnChanges, OnInit {

  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque natural para caballos';
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('Método onInit lanzado');
  }

  emitirEvento() {
    this.pasameDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }

}
