import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-boton-primario',
  standalone: true,
  templateUrl: './boton-primario.component.html',
  styleUrls: ['./boton-primario.component.css'] 
})
export class BotonPrimarioComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
