import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { FileUploadAndRetrieveComponent } from './file-upload-and-retrieve/file-upload-and-retrieve.component';
import { FileUploadAndDownloadComponent } from './file-components/file-upload-and-download/file-upload-and-download.component';

@NgModule({
  declarations: [AppComponent, TemplateComponent, ChildComponent, ParentComponent, Child2Component, ExcelsheetComponent, FileUploadAndRetrieveComponent, FileUploadAndDownloadComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
