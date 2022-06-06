import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademindFileUploadComponent } from './academind-file-upload.component';

describe('AcademindFileUploadComponent', () => {
  let component: AcademindFileUploadComponent;
  let fixture: ComponentFixture<AcademindFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademindFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademindFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
