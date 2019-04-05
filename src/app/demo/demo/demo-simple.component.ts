import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DemoChildComponent} from '../children/demo-child.component';

@Component({
  selector: 'app-demo-simple',
  templateUrl: './demo-simple.component.html'
})

export class DemoSimpleComponent implements OnInit {
  @ViewChild(DemoChildComponent) demoChild: DemoChildComponent;

  constructor() {}

  ngOnInit() {
  }

  processClick() {
    console.log(`Button has been clicked in demo-simple component`);
  }

}
