import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  standalone: true,
  templateUrl: './boton-aceptar.component.html',
  styleUrls: ['./boton-aceptar.component.css']
})
export class BotonAceptarComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit(); // Emite el evento para que el componente padre lo maneje
  }
}

