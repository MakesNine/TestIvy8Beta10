import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './demo-child.component.html'
})
export class DemoChildComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  sayHi() {
    console.log(`Just saying Hi from child`);

  }


}
