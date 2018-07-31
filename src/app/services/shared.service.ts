import { Injectable, EventEmitter } from '@angular/core';

import CryptoJS from 'crypto-js';

import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  static secretKey: string = 'socialNetwork';

  static changeStateModalLoaderEmitter = new EventEmitter<any>();
  static changeStateModalMessageEmitter = new EventEmitter<any>();


  public user: User = new User();


  constructor() { }





/*---------------------------------Inicio de Funciones Emitter------------------*/
changeStateModalLoader(data){
  SharedService.changeStateModalLoaderEmitter.emit(data);
}

changeStateModalMessage(data){
  SharedService.changeStateModalMessageEmitter.emit(data);
}
/*---------------------------------Fin de Funciones Emitter------------------*/






/*---------------------------------Inicio de Funciones Propias------------------*/

getUser() {
  let data = localStorage.getItem('userSN');
  this.user = data ? new User(this.decryptData(data)) : null;
  return this.user;
}

setUser(user: User) {
  var data: any = this.encryptData(user);
  localStorage.setItem('userSN', data);
}
/*---------------------------------Fin de Funciones Propias------------------*/





/*---------------------------------Inicio de Funciones Generales------------------*/
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  encryptData(data): any{
    var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), SharedService.secretKey);
    return encryptedData;
  }

  decryptData(data): any{
    var bytes  = CryptoJS.AES.decrypt(data.toString(), SharedService.secretKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  encryptDataSha256(data){
    return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  }
/*---------------------------------Fin de Funciones Generales------------------*/






}
