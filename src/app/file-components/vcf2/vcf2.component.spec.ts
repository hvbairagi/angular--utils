import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vcf2Component } from './vcf2.component';

describe('Vcf2Component', () => {
  let component: Vcf2Component;
  let fixture: ComponentFixture<Vcf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vcf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vcf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
