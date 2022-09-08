import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'sesion-alumno',
    loadChildren: () => import('./pages/sesion-alumno/sesion-alumno.module').then( m => m.SesionAlumnoPageModule)
  },
  {
    path: 'sesion-docente',
    loadChildren: () => import('./pages/sesion-docente/sesion-docente.module').then( m => m.SesionDocentePageModule)
  },
  {
    path: 'eleccion',
    loadChildren: () => import('./pages/eleccion/eleccion.module').then( m => m.EleccionPageModule)
  },
  {
    path: 'reg-eleccion',
    loadChildren: () => import('./pages/reg-eleccion/reg-eleccion.module').then( m => m.RegEleccionPageModule)
  },
  {
    path: 'regalumno',
    loadChildren: () => import('./pages/regalumno/regalumno.module').then( m => m.RegalumnoPageModule)
  },
  {
    path: 'regdocente',
    loadChildren: () => import('./pages/regdocente/regdocente.module').then( m => m.RegdocentePageModule)
  },
  {
    path: 'decision',
    loadChildren: () => import('./pages/decision/decision.module').then( m => m.DecisionPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'escanear',
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'profe',
    loadChildren: () => import('./pages/profe/profe.module').then( m => m.ProfePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
