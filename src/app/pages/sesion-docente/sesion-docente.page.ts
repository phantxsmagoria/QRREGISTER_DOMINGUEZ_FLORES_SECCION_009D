import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-sesion-docente',
  templateUrl: './sesion-docente.page.html',
  styleUrls: ['./sesion-docente.page.scss'],
})
export class SesionDocentePage implements OnInit {

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
