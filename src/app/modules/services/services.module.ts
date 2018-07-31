import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from '../../services/http.service';
import { IndexService } from '../../services/index.service';
import { SharedService } from '../../services/shared.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HttpService,
    IndexService,
    SharedService
  ]
})
export class ServicesModule {}
