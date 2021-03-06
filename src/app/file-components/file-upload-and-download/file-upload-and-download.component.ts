import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { FileService } from './file.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-upload-and-download',
  templateUrl: './file-upload-and-download.component.html',
  styleUrls: ['./file-upload-and-download.component.css'],
})
export class FileUploadAndDownloadComponent implements OnInit {
  ngOnInit(): void {}

  uploader: FileUploader = new FileUploader({ url: uri });

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
