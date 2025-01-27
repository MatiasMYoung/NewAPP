import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../services/asignaturas.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule],
})
export class AsignaturasPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.obtenerAsignaturas();
  }

  obtenerAsignaturas() {
    this.asignaturasService.getAsignaturas().subscribe(data => {
      this.asignaturas = data;
    });
  }
}