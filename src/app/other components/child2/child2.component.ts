import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @Output() greetEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  name = 'harsh';

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }
}
