import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { RouterModule, ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule, FooterComponent],
})
export class ProfesoresPage implements OnInit {
  profesor: any;
  cursos: any[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const currentUser = this.apiService.getCurrentUser();
    if (currentUser && currentUser.id) {
      this.apiService.getCursosProfesor(currentUser.id).subscribe(
        (cursos: any[]) => {
          this.cursos = cursos.slice(0, 3); // Mostrar solo las primeras 3 asignaturas
        },
        error => {
          console.error('Error al obtener los cursos:', error);
        }
      );
    }
  }

  verDetallesCurso(curso: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: curso.id,
        nombre: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/curso-detalles'], navigationExtras);
  }

  generarQR(curso: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: curso.id,
        nombre: curso.nombre,
        codigo: curso.codigo,
        seccion: curso.seccion
      }
    };
    this.router.navigate(['/curso-qr'], navigationExtras);
  }
}
