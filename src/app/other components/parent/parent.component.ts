import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  userLoggedIn = true;
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  ngAfterViewInit() {
    this.childComponentRef.message = 'Message from parent component';
  }
}
