import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrasena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contrasena.component.html',
  styleUrl: './contrasena.component.css'
})

export class ContrasenaComponent {
  password = ''; 
}
