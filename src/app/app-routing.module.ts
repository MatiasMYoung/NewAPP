import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';
import { ProfesorGuard } from './guards/profesor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosPageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'profesores',
    loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresPageModule),
    canActivate: [ProfesorGuard]
  },
  {
    path: 'curso-detalles',
    loadChildren: () => import('./curso-detalles/curso-detalles.module').then(m => m.CursoDetallesPageModule)
  },
  {
    path: 'curso-qr',
    loadChildren: () => import('./curso-qr/curso-qr.module').then(m => m.CursoQrPageModule)
  },
  {
    path: 'confirmacion-asistencia',
    loadChildren: () => import('./confirmacion-asistencia/confirmacion-asistencia.module').then(m => m.ConfirmacionAsistenciaPageModule)
  },
  {
    path: 'alumno-asignaturas',
    loadChildren: () => import('./alumno-asignaturas/alumno-asignaturas.module').then(m => m.AlumnoAsignaturasPageModule)
  },
  {
    path: 'aasignaturas',
    loadChildren: () => import('./aasignaturas/aasignaturas.module').then( m => m.AAsignaturasPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error404/error404.module').then(m => m.Error404PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
