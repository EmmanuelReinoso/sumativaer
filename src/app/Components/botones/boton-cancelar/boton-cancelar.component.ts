import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-cancelar',
  standalone: true,
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.css']
})
export class BotonCancelarComponent {
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    this.clickEvent.emit();
  }
}
