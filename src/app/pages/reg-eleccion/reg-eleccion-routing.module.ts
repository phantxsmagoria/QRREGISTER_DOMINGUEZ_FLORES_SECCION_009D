import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegEleccionPage } from './reg-eleccion.page';

const routes: Routes = [
  {
    path: '',
    component: RegEleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegEleccionPageRoutingModule {}
