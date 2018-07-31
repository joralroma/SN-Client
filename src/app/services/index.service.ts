import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private _httpService: HttpService,
    private _sharedService: SharedService
  ) { }

  loginUser(data: User) {
    let url = '/user/1';
    data.password = this._sharedService.encryptDataSha256(data.password);
    console.log('la data login: ',data);
    return this._httpService.httpPost(url, data);
  }

  registerUser(data) {
    let url = '/user/2';
    data.password = this._sharedService.encryptDataSha256(data.password);
    console.log('la data register: ',data);
    return this._httpService.httpPost(url, data);
  }

}
