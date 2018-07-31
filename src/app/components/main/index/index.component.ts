import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../models/user';

import { IndexService } from '../../../services/index.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  public newUser:
  {name: String, lastName: String, email: String, password: String, birthday: String, gender: Number}
  = {name: null, lastName: null, email: null, password: null, birthday: null, gender: null};

  public user:
  {email: String, password: String}
  = {email: null, password: null};

  public acceptTermsAndConditions: boolean = false;

  public dataErrorNewUser:
  {name: boolean, lastName: boolean, email: boolean, password: boolean, acceptTermsAndConditions: boolean}
  = {name: false, lastName: false, email: false, password: false, acceptTermsAndConditions: false};

  public dataErrorUser:
  {email: boolean, password: boolean}
  = {email: false, password: false};

  public focusInputsRegister:
  { name: boolean, lastName: boolean, email: boolean, password: boolean, birthday: boolean, gender: boolean }
  = { name: false, lastName: false, email: false, password: false, birthday: false, gender: false }

  public focusInputsLogin:
  { email: boolean, password: boolean, rememberMe: boolean }
  = { email: false, password: false, rememberMe: false }

  public containers: { login: boolean, register: boolean } = { login: true, register: false };

  public stateContainerSelect: boolean = false;

  public optionGenderSelect: number = 1;
  public textGenderSelect: string = 'Masculino';

  constructor(
    private _indexService: IndexService,
    private _sharedService: SharedService,
    private _router: Router
  ) {
    this.newUser.birthday = '12/25/1993';
   }

  ngOnInit() {
  }


/*--------------------------------------------Incio de funciones Propias------------------------------- */

showContainer(opt: number) {
  switch (opt) {
    case 1:
      this.containers.register = false;
      this.containers.login = true;
    break;
    case 2:
      this.containers.login = false;
      this.containers.register = true;
    break;
  }
}

closeContainerSelect(e){
  if(e.target.className != 'fa fa-angle-down icon_select'){
    this.changeStateContainerSelect(false);
  }
}

changeStateContainerSelect(type: boolean){
  this.stateContainerSelect = type;
}

changeOptionGenderSelect(opt: number, text: string){
  this.newUser.gender = opt;
  this.textGenderSelect = text;
}

registerNewUser(){
  if(this.verifyDataNewUser()){
    this._sharedService.changeStateModalLoader(true);
    let u: User = new User(this.newUser);
    this._indexService.registerUser(u).subscribe(
      data => {
        this.validateDataOfServer(data);
        this._sharedService.changeStateModalLoader(false);
      },
      err => {
        this._sharedService.changeStateModalLoader(false);
      }
    );
  }
}

verifyDataNewUser(): boolean{
  this.resetDataError();
  let result: boolean = true;
  if(!this.newUser.name || this.newUser.name.trim() == ''){
    this.dataErrorNewUser.name = true;
    result = false;
  }
  if(!this.newUser.lastName || this.newUser.lastName.trim() == ''){
    this.dataErrorNewUser.lastName = true;
    result = false;
  }
  if(!this.newUser.email || this.newUser.email.trim() == ''){
    this.dataErrorNewUser.email = true;
    result = false;
  }
  if(!this.newUser.password || this.newUser.password.trim() == ''){
    this.dataErrorNewUser.password = true;
    result = false;
  }
  if(!this.acceptTermsAndConditions){
    this.dataErrorNewUser.acceptTermsAndConditions = true;
    result = false;
  }
  return result;
}


LoginUser(){
  if(this.verifyDataUser()){
    this._sharedService.changeStateModalLoader(true);
    let u: User = new User(this.user);
    this._indexService.loginUser(u).subscribe(
      data => {
        this.validateDataOfServer(data);
        this._sharedService.changeStateModalLoader(false);
      },
      err => {
        this._sharedService.changeStateModalLoader(false);
      }
    );
  }
}

verifyDataUser(){
  this.resetDataError();
  let result: boolean = true;
  if(!this.user.email || this.user.email.trim() == '' || !this._sharedService.validateEmail(this.user.email)){
    this.dataErrorUser.email = true;
    result = false;
  }
  if(!this.user.password || this.user.password.trim() == ''){
    this.dataErrorUser.password = true;
    result = false;
  }
  return result;
}

validateDataOfServer(data){
  console.log('la data es: ',data);
  if(data.type == 1){
    let user: User = new User(data.data);
    this._sharedService.setUser(user);
    this._router.navigate(['/home']);
  }else{
    this._sharedService.changeStateModalMessage({typeMsm: 1, titleMsm: 'Error!', textMsm: data.data})
  }
}


resetDataError(){
  this.dataErrorUser = {email: false, password: false};
  this.dataErrorNewUser = {name: false, lastName: false, email: false, password: false, acceptTermsAndConditions: false};
}

/*--------------------------------------------Fin de funciones Propias------------------------------- */

}
