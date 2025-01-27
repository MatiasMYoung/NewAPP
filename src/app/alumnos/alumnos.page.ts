import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { RouterModule, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FooterComponent],
})
export class AlumnosPage implements OnInit {
  alumno: any;

  constructor(private apiService: ApiService, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.alumno = this.apiService.getCurrentUser();
  }

  confirmarAsistencia() {
    this.router.navigate(['/confirmacion-asistencia']);
  }

  async mostrarError() {
    const alert = await this.alertController.create({
      header: 'Error de Lectura',
      message: 'Vuelva a escanear.',
      buttons: ['OK']
    });

    await alert.present();
  }
}