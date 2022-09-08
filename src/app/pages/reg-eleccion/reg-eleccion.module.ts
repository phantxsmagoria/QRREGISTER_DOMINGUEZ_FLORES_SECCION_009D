import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegEleccionPageRoutingModule } from './reg-eleccion-routing.module';

import { RegEleccionPage } from './reg-eleccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegEleccionPageRoutingModule
  ],
  declarations: [RegEleccionPage]
})
export class RegEleccionPageModule {}
