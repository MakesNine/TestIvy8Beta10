import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { BaseDemoComponent } from '../../base-demo/base-demo.component';
import { DemoChildComponent} from '../children/demo-child.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent extends BaseDemoComponent implements OnInit {
  // @ViewChild(DemoChildComponent) demoChild: DemoChildComponent;

  constructor() {
     super();
   }

  ngOnInit() {
  }


}
