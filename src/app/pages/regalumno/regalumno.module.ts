import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegalumnoPageRoutingModule } from './regalumno-routing.module';

import { RegalumnoPage } from './regalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegalumnoPageRoutingModule
  ],
  declarations: [RegalumnoPage]
})
export class RegalumnoPageModule {}
