import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {

  @Input() data: any;

  public typeMsm: number = 0;
  public titleMsm: string = '';
  public textMsm: string = '';

  constructor() { }

  ngOnInit() {
    this.extractTheData();
  }


/*-------------------------------Incio de Funciones Propias-------------------*/
  extractTheData(){
    this.typeMsm = this.data.typeMsm;
    this.titleMsm = this.data.titleMsm;
    this.textMsm = this.data.textMsm;
  }
/*-------------------------------Fin de Funciones Propias-------------------*/

}
