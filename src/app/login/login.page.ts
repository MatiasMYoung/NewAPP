import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage {
  loginData = {
    user: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  iniciarSesion() {
    this.apiService.login(this.loginData.user, this.loginData.password).subscribe(
      response => {
        console.log('Login exitoso:', response);
        const navigationExtras: NavigationExtras = {
          queryParams: { user: response.user }
        };
        // Redirigir a la página correspondiente según el perfil del usuario
        if (response.tipoPerfil === 1) {
          this.router.navigate(['/profesores'], navigationExtras);
        } else if (response.tipoPerfil === 2) {
          this.router.navigate(['/alumnos'], navigationExtras);
        }
      },
      error => {
        console.error('Error de login:', error);
        alert('Credenciales incorrectas');
      }
    );
  }
}
