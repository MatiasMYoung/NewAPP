import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AlumnoAsignaturasPage } from './alumno-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlumnoAsignaturasPage
      }
    ])
  ],
  declarations: []
})
export class AlumnoAsignaturasPageModule {}
