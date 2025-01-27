import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoQrPageRoutingModule } from './curso-qr-routing.module';

import { CursoQrPage } from './curso-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoQrPageRoutingModule
  ],
  declarations: []
})
export class CursoQrPageModule {}
