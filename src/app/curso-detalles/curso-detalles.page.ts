import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-curso-detalles',
  templateUrl: './curso-detalles.page.html',
  styleUrls: ['./curso-detalles.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class CursoDetallesPage implements OnInit {
  curso: any;
  alumnos: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        nombre: params['nombre'],
        codigo: params['codigo'],
        seccion: params['seccion']
      };
      this.apiService.getAlumnosCurso(this.curso.id).subscribe(alumnos => {
        this.alumnos = alumnos;
      });
    });
  }
}
