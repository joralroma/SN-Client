import { SharedService } from './../services/shared.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _sharedService: SharedService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let data = next.data;
    return this.redirect(data);
    // return this.verifyAccess();
  }

  redirect(data){
    let user: boolean = this.verifyUser();
    if(data.action == 'out'){
      if(user) {
        this._router.navigate(['/home']);
        return false
      }else{
        return true;
      }
    }else if(data.action == 'go'){
      if(user) {
        return true;
      }else{
        this._router.navigate(['']);
        return false
      }
    }
  }

  verifyUser(): boolean {
    let user = this._sharedService.getUser();
    if (user) {
      return true;
    }
    return false;
  }

}
