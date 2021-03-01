import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  afuConfig = {
    uploadAPI: {
      url: 'http://localhost:3000/api/employee/store',
    },
  };
}
