import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modo-oscuro',
  imports: [CommonModule],
  templateUrl: './modo-oscuro.component.html',
  styleUrl: './modo-oscuro.component.css'
})
export class ModoOscuroComponent {
  isDarkMode = false;

  // Emitir evento al componente padre
  @Output() darkModeToggle = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
