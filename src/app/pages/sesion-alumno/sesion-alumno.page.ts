import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sesion-alumno',
  templateUrl: './sesion-alumno.page.html',
  styleUrls: ['./sesion-alumno.page.scss'],
})
export class SesionAlumnoPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
