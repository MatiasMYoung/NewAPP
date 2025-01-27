import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AAsignaturasPage } from './aasignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AAsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AAsignaturasPageRoutingModule {}
