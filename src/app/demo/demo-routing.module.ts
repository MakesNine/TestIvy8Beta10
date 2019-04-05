import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DemoSimpleComponent } from './demo/demo-simple.component';
import { DemoExtendsComponent } from './demo/demo-extends.component';

@NgModule({
  imports: [
    RouterModule.forChild([
    {path: '', component: DemoExtendsComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class DemoRoutingModule { }
