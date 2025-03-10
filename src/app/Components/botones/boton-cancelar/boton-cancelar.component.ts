import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-cancelar',
  standalone: true,
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.css']
})
export class BotonCancelarComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
