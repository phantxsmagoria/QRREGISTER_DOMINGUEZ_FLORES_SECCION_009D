import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-eleccion',
  templateUrl: './eleccion.page.html',
  styleUrls: ['./eleccion.page.scss'],
})
export class EleccionPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
