import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf} from '@angular/common';
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
    NgIf
  ],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  title = 'SUMATIVA';

  isAnimated: boolean = false;
  isDarkMode = false;

  // Variables para los inputs
  emailValue: string = '';
  passwordValue: string = '';
  textValue: string = '';

  // Contadores y estados
  clickCount: number = 0;
  currentTime: string = '';
  passwordMessage: string = ''; // Mensaje dinámico de validación de contraseña

  /**
   * Valida el email ingresado y muestra un mensaje.
   */
  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.emailValue.trim())) {
      alert('Correo válido');
    } else {
      alert('Correo inválido. Debe incluir "@" y terminar en ".com".');
    }
  }

  /**
   * Actualiza el estado del mensaje de validación de la contraseña.
   * @param status Mensaje enviado por el componente `ContraComponent`.
   */
  updatePasswordStatus(status: string) {
    this.passwordMessage = status;
  }

  /**
   * Activa o desactiva el modo oscuro.
   * @param isDark Estado del modo oscuro.
   */
  onDarkModeToggle(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  /**
   * Incrementa el contador de clics.
   */
  incrementClickCount() {
    this.clickCount++;
  }

  /**
   * Borra todos los inputs y resetea los datos del demostrativo.
   */
  clearInputs() {
    this.emailValue = '';
    this.passwordValue = '';
    this.textValue = '';
    this.clickCount = 0;
    this.currentTime = '';
    this.passwordMessage = ''; // Resetea también el mensaje de validación
  }

  /**
   * Muestra la hora actual en el demostrativo.
   */
  showTime() {
    const currentDate = new Date();
    this.currentTime = currentDate.toLocaleTimeString();
  }
}
