import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academind-file-upload',
  templateUrl: './academind-file-upload.component.html',
  styleUrls: ['./academind-file-upload.component.css'],
})
export class AcademindFileUploadComponent implements OnInit {
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('http://localhost:3000/acade', fd, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(
            'Upload Progress: ' +
              Math.round((event.loaded / event.total) * 100) +
              '%'
          );
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }
}
