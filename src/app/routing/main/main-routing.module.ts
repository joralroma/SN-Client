import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes propios
import { IndexComponent } from '../../components/main/index/index.component';

import { LoginGuard } from './../../guards/login.guard';


const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent, canActivate: [LoginGuard], data: {action: 'out'}}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
