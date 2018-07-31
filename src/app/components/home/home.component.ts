import { Component, OnInit } from '@angular/core';

import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
  }


  c(){
    this._sharedService.changeStateModalMessage({typeMsm: 1, titleMsm: 'Esto es mi titulo', textMsm: 'Mi Texto de Msmmmmmmmmm'});
  }


}
