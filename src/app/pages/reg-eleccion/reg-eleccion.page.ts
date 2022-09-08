import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reg-eleccion',
  templateUrl: './reg-eleccion.page.html',
  styleUrls: ['./reg-eleccion.page.scss'],
})
export class RegEleccionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

}
