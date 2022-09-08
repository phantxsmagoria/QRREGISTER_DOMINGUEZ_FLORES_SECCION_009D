import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-regalumno',
  templateUrl: './regalumno.page.html',
  styleUrls: ['./regalumno.page.scss'],
})
export class RegalumnoPage implements OnInit {

  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario = {
    primernombre:'',
    segundoombre:'',
    primerapellido:'',
    segundoapellido:'',
    edad:'',
    fechadenacimiento:'',
    carrera:'',
    semestre:'',
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
