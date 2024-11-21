import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modo-oscuro',
  imports: [],
  templateUrl: './modo-oscuro.component.html',
  styleUrl: './modo-oscuro.component.css'
})
export class ModoOscuroComponent {
  @Input() isDarkMode!: boolean;

  
}
