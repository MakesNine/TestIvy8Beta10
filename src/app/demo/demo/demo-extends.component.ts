import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { BaseDemoComponent } from '../../base-demo/base-demo.component';
import { DemoChildComponent} from '../children/demo-child.component';

@Component({
  selector: 'app-demo-extends',
  templateUrl: './demo-extends.component.html'
})

export class DemoExtendsComponent extends BaseDemoComponent implements OnInit {
// export class DemoExtendsComponent implements OnInit {
  @ViewChild(DemoChildComponent) demoChild: DemoChildComponent;

  constructor() {
     super();
   }

  ngOnInit() {
  }



}
