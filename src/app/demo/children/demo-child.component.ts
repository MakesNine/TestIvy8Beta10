import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './demo-child.component.html'
})
export class DemoChildComponent implements OnInit {


  constructor() {
    console.log(`Constructor in child component has been called`);
  }

  ngOnInit() {

  }

  sayHi(name: string) {
    console.log(`Just saying Hi ${name} from child`);

  }

  processClick() {
    console.log(`Button in child clicked`);
  }


}
