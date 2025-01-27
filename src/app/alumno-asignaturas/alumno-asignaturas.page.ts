import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AsignaturasService } from '../services/asignaturas.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alumno-asignaturas',
  templateUrl: './alumno-asignaturas.page.html',
  styleUrls: ['./alumno-asignaturas.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class AlumnoAsignaturasPage implements OnInit {
  alumno: any;
  asignaturas: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.alumno = {
        id: params['id'],
        nombre: params['nombre']
      };
      this.apiService.getAsignaturasAlumno(this.alumno.id).subscribe(asignaturas => {
        this.asignaturas = asignaturas;
      });
    });
    this.obtenerAsignaturas();
  }

  obtenerAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    });
  }
}
