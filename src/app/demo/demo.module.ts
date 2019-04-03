import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseDemoModule } from '../base-demo/base-demo.module';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './demo/demo.component';
import { DemoChildComponent } from './children/demo-child.component';


@NgModule({
  declarations: [DemoComponent, DemoChildComponent] ,
  imports: [
    CommonModule, DemoRoutingModule, BaseDemoModule
  ]
})
export class DemoModule { }
