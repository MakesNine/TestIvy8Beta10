import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseDemoComponent } from './base-demo.component';

@NgModule({
  declarations: [ BaseDemoComponent ],
  imports: [
    CommonModule
  ],
  exports: [ BaseDemoComponent ]
})
export class BaseDemoModule { }
