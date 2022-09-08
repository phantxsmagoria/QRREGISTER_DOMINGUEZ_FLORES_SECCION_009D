import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-regdocente',
  templateUrl: './regdocente.page.html',
  styleUrls: ['./regdocente.page.scss'],
})
export class RegdocentePage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

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
    ramoaimpartir:'',
    email: '',
    password:''
  }



}
