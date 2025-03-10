import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-secundario',
  standalone: true,
  templateUrl: './boton-secundario.component.html',
  styleUrls: ['./boton-secundario.component.css'] 
})
export class BotonSecundarioComponent {
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
