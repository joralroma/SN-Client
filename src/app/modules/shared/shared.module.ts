import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from '../../components/shared/loader/loader.component';
import { MessageComponent } from './../../components/shared/message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    MessageComponent
  ],
  exports: [
    LoaderComponent,
    MessageComponent
  ]
})
export class SharedModule { }
