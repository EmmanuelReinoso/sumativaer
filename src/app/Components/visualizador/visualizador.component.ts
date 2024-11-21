import { Component, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonPrimarioComponent } from '../botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from '../botones/boton-secundario/boton-secundario.component';
import { BotonAceptarComponent } from '../botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from '../botones/boton-cancelar/boton-cancelar.component';
import { ModoOscuroComponent } from '../botones/modo-oscuro/modo-oscuro.component';
import { ContrasenaComponent } from '../inputs/contrasena/contrasena.component';
import { EmailComponent } from '../inputs/email/email.component';
import { TextoComponent } from '../inputs/texto/texto.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [
    CommonModule,
    BotonPrimarioComponent,
    BotonSecundarioComponent,
    BotonAceptarComponent,
    BotonCancelarComponent,
    ModoOscuroComponent,
    ContrasenaComponent,
    EmailComponent,
    TextoComponent,
    FormsModule,
  ],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  password = '';
  email = '';
  texto = '';
  isDarkMode = false;
  isAnimated = false;
  mostrarMensaje=false;
  @ViewChild('cuadrado') cuadrado!: ElementRef; // Obtén la referencia al cuadrado
  rotationAngle = 0;

  onButtonClick(tipoBoton: string) {
    if (tipoBoton === 'Primario') {
      this.mostrarMensaje = !this.mostrarMensaje;
    } else if (tipoBoton === 'Secundario') {
      this.rotationAngle += 45;
      this.cuadrado.nativeElement.style.transform = `rotate(${this.rotationAngle}deg)`;
    } else if (tipoBoton === 'Aceptar') {
      this.validarDatos(); // Llama a la función de validación
    } else if (tipoBoton === 'Cancelar') {
      this.limpiarDatos(); // Llama a la función para limpiar datos
    } else if (tipoBoton === 'Modo Oscuro'){
      this.cambiarModo();
    }
  }
  
  cambiarModo(){
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  validarDatos() {
    // Validación de la contraseña
    const passwordRegex = /^[a-z]{8,}$/; // Solo minúsculas, 8 o más caracteres
    if (!passwordRegex.test(this.password)) {
      alert('La contraseña debe tener al menos 8 caracteres y solo minúsculas.');
      return;
    }

    // Validación del email
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      alert('El email no es válido.');
      return;
    }

    // Validación del texto
    const textoRegex = /^[a-zA-Z]+$/; // Solo letras
    if (!textoRegex.test(this.texto)) {
      alert('El texto solo puede contener letras.');
      return;
    }

    // Si todas las validaciones pasan, puedes realizar alguna acción
    alert('Datos válidos!');
  }

  limpiarDatos() {
    this.password = '';
    this.email = '';
    this.texto = '';
  }
}
