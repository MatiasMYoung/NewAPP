import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-curso-qr',
  templateUrl: './curso-qr.page.html',
  styleUrls: ['./curso-qr.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CursoQrPage implements OnInit {
  curso: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.curso = {
        id: params['id'],
        nombre: params['nombre'],
        codigo: params['codigo'],
        seccion: params['seccion']
      };
    });
  }

  verDetallesCurso() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: this.curso.id,
        nombre: this.curso.nombre,
        codigo: this.curso.codigo,
        seccion: this.curso.seccion
      }
    };
    this.router.navigate(['/curso-detalles'], navigationExtras);
  }
}
