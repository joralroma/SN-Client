import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from '../../components/main/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    IndexComponent
  ]
})
export class MainModule { }
