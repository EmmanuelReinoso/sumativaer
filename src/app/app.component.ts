import { Component, Input } from '@angular/core';
import { VisualizadorComponent } from './Components/visualizador/visualizador.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisualizadorComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
 
}
