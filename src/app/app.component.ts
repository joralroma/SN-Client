import { Component } from '@angular/core';

import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public modelLoaderState: boolean = false;

  public modelMessageState: boolean = false;
  public dataMsm: any;

  constructor(
    private _sharedService: SharedService
  ) {
    this.listenerEvents();
  }



/*------------------------------Inicio de Funciones Propias--------------------------*/
changeStateModalLoader(state: boolean) {
  this.modelLoaderState = state;
}

changeStateModalMessage(data: any) {
  this.dataMsm = data;
  this.modelMessageState = true;
  setTimeout(() => this.modelMessageState = false, 3000);
}

listenerEvents(){

  SharedService.changeStateModalLoaderEmitter.subscribe( data => this.changeStateModalLoader(data) );

  SharedService.changeStateModalMessageEmitter.subscribe( data => this.changeStateModalMessage(data) );

}
/*------------------------------Fin de Funciones Propias--------------------------*/


}
