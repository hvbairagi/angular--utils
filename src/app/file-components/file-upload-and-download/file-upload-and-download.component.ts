import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/file.service';

@Component({
  selector: 'app-file-upload-and-download',
  templateUrl: './file-upload-and-download.component.html',
  styleUrls: ['./file-upload-and-download.component.css'],
})
export class FileUploadAndDownloadComponent implements OnInit {
  URL = 'http://localhost:3000/api/employee/store';

  ngOnInit(): void {
    console.log(this.uploader);
  }

  uploader: FileUploader = new FileUploader({ url: this.URL });

  attachmentList: any = [];

  constructor(private _fileService: FileService) {
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      this.attachmentList.push(JSON.parse(response));
    };
  }

  download(index) {
    var filename = this.attachmentList[index].uploadname;

    this._fileService.downloadFile(filename).subscribe(
      (data) => saveAs(data, filename),
      (error) => console.error(error)
    );
  }
}
