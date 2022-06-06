import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcfComponent } from './vcf.component';

describe('VcfComponent', () => {
  let component: VcfComponent;
  let fixture: ComponentFixture<VcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
