import { Component, OnInit } from '@angular/core';
import { VCard } from 'ngx-vcard';

@Component({
  selector: 'app-vcf',
  templateUrl: './vcf.component.html',
  styleUrls: ['./vcf.component.css'],
})
export class VcfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public vCard: VCard = {
    name: {
      firstNames: 'John',
      lastNames: 'Doe',
    },
  };
}
