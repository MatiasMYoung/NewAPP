import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from '../services/asignaturas.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmacion-asistencia',
  templateUrl: './confirmacion-asistencia.page.html',
  styleUrls: ['./confirmacion-asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class ConfirmacionAsistenciaPage implements OnInit {
  alumno: any;
  asignaturas: any[] = [];
  asistenciaConfirmada: boolean = true; // Simula que la asistencia está confirmada
  mostrarAsignaturas: boolean = false; // Controla la visibilidad de las asignaturas

  constructor(private router: Router, private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.obtenerAlumno();
    this.obtenerAsignaturas();
  }

  obtenerAlumno() {
    this.alumno = {
      nombre: 'Juan Pérez',
      id: 12345
    };
  }

  obtenerAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    });
  }

  verAsignaturas() {
    this.router.navigate(['/alumno-asignaturas']);
  }
}
