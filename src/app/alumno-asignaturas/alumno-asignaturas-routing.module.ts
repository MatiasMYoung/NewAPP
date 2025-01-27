import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoAsignaturasPage } from './alumno-asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoAsignaturasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoAsignaturasPageRoutingModule {}
