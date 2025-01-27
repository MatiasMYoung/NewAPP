import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoQrPage } from './curso-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CursoQrPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoQrPageRoutingModule {}
