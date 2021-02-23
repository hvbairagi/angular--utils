import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadAndDownloadComponent } from './file-upload-and-download.component';

describe('FileUploadAndDownloadComponent', () => {
  let component: FileUploadAndDownloadComponent;
  let fixture: ComponentFixture<FileUploadAndDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadAndDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadAndDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
