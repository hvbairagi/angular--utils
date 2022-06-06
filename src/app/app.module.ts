import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { NgxVcardModule } from 'ngx-vcard';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './other components/template/template.component';
import { ChildComponent } from './other components/child/child.component';
import { ParentComponent } from './other components/parent/parent.component';
import { Child2Component } from './other components/child2/child2.component';
import { ExcelsheetComponent } from './file-components/excelsheet/excelsheet.component';
import { FileUploadAndRetrieveComponent } from './file-components/file-upload-and-retrieve/file-upload-and-retrieve.component';
import { FileUploadAndDownloadComponent } from './file-components/file-upload-and-download/file-upload-and-download.component';
import { FileUploadComponent } from './file-components/file-upload/file-upload.component';
import { UploadsComponent } from './file-components/uploads/uploads.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';

//Material
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CsvComponent } from './file-components/csv/csv.component';
import { VcfComponent } from './file-components/vcf/vcf.component';
import { Vcf2Component } from './file-components/vcf2/vcf2.component';
import { AcademindFileUploadComponent } from './file-components/academind-file-upload/academind-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ChildComponent,
    ParentComponent,
    Child2Component,
    ExcelsheetComponent,
    FileUploadAndRetrieveComponent,
    FileUploadAndDownloadComponent,
    FileUploadComponent,
    UploadsComponent,
    GalleryComponent,
    GalleryDetailsComponent,
    CsvComponent,
    VcfComponent,
    Vcf2Component,
    AcademindFileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    NgxCsvParserModule,
    NgxVcardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
