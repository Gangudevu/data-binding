import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styles: []
})
export class Component3Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(value){
    this.childEvent.emit(value);
  }
}
