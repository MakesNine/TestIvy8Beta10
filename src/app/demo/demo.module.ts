import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseDemoModule } from '../base-demo/base-demo.module';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoExtendsComponent } from './demo/demo-extends.component';
import { DemoSimpleComponent } from './demo/demo-simple.component';
import { DemoChildComponent } from './children/demo-child.component';


@NgModule({
  declarations: [DemoExtendsComponent, DemoSimpleComponent, DemoChildComponent] ,
  imports: [
    CommonModule, DemoRoutingModule, BaseDemoModule
  ]
})
export class DemoModule { }
