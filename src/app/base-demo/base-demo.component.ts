import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { DemoChildComponent} from '../demo/children/demo-child.component';

@Component({
  selector: 'app-basedemo',
  template: ``

})
export class BaseDemoComponent implements OnInit, AfterViewInit {
  @ViewChild(DemoChildComponent) demoChild: DemoChildComponent;

  constructor() {
      console.log(`Base constructor executing as expected`);
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.demoChild.sayHi();
  }

}
