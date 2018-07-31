import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../../components/home/home.component';

import { LoginGuard } from './../../guards/login.guard';

const HOME_ROUTES: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard], data: {action: 'go'}}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
