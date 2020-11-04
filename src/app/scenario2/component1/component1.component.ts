import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <h1>Scenario2</h1>
    <h1>component2</h1>
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `,

  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public name = "";
  
  constructor() { }

  ngOnInit() {
  }

  value = '';
  onEnter(value: string) { this.value = value; }


}