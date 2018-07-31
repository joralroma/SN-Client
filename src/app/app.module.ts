import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

import { MainModule } from './modules/main/main.module';
import { HomeModule } from './modules/home/home.module';
import { ServicesModule } from './modules/services/services.module';
import { SharedModule } from './modules/shared/shared.module';

import { MainRoutingModule } from './routing/main/main-routing.module';

import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ServicesModule,
    SharedModule,
    MainModule,
    MainRoutingModule,
    HomeModule
  ],
  providers: [
    ServicesModule,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
