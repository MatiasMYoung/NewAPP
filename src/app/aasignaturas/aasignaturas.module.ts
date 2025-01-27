import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AAsignaturasPageRoutingModule } from './aasignaturas-routing.module';

import { AAsignaturasPage } from './aasignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AAsignaturasPageRoutingModule
  ],
  declarations: []
})
export class AAsignaturasPageModule {}
