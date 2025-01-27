import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetallesPage } from './curso-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDetallesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDetallesPageRoutingModule {}
