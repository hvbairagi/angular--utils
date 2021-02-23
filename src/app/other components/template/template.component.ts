import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Harsh') {
      alert('Hello ' + value);
    }
  }

  incrementCount() {
    this.count += 1;
  }

  greetHarsh(updatedValue) {
    this.userName = updatedValue;
    if (updatedValue === 'Harsh') {
      alert('Hello ' + updatedValue);
    }
  }
}
