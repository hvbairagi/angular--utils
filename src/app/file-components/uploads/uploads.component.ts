import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  profileForm: FormGroup;
  error: string;

  fileUpload = { status: '', message: '', filePath: '' };

  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileService
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [''],
      profile: [''],
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData).subscribe(
      (res) => (this.fileUpload = res),
      (err) => (this.error = err)
    );
  }
}
