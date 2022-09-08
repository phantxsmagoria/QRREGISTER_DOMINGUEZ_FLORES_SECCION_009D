import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegdocentePageRoutingModule } from './regdocente-routing.module';

import { RegdocentePage } from './regdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegdocentePageRoutingModule
  ],
  declarations: [RegdocentePage]
})
export class RegdocentePageModule {}
