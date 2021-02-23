import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges {
  @Input() loggedIn: boolean;
  message: string;
  name = 'Harsh';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome back!';
    } else {
      this.message = 'Please log in!';
    }
  }

  greetHarsh() {
    alert('Hey Harsh!');
  }

  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }
  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value;
  //   if (value === true) {
  //     this.message = 'Welcome back Harsh';
  //   } else {
  //     this.message = 'Please log in';
  //   }
  // }
}
