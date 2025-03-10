import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Input() value: string = '';

  onInputChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }
}
