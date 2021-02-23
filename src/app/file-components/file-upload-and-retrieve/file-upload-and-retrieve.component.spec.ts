import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadAndRetrieveComponent } from './file-upload-and-retrieve.component';

describe('FileUploadAndRetrieveComponent', () => {
  let component: FileUploadAndRetrieveComponent;
  let fixture: ComponentFixture<FileUploadAndRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadAndRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadAndRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
