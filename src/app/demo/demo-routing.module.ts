import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
    {path: '', component: DemoComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class DemoRoutingModule { }
