import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademindFileUploadComponent } from './file-components/academind-file-upload/academind-file-upload.component';
import { CsvComponent } from './file-components/csv/csv.component';
import { ExcelsheetComponent } from './file-components/excelsheet/excelsheet.component';
import { FileUploadAndDownloadComponent } from './file-components/file-upload-and-download/file-upload-and-download.component';
import { FileUploadAndRetrieveComponent } from './file-components/file-upload-and-retrieve/file-upload-and-retrieve.component';
import { FileUploadComponent } from './file-components/file-upload/file-upload.component';
import { VcfComponent } from './file-components/vcf/vcf.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

const routes: Routes = [
  { path: 'acade', component: AcademindFileUploadComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: 'List of sales' },
  },
  {
    path: 'gallery-details/:id',
    component: GalleryDetailsComponent,
    data: { title: 'Gallery Details' },
  },
  { path: 'excel', component: ExcelsheetComponent },
  { path: 'csv', component: CsvComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'file-uandd', component: FileUploadAndDownloadComponent },
  { path: 'file-uandr', component: FileUploadAndRetrieveComponent },
  { path: 'vcf', component: VcfComponent },
  {
    path: '',
    redirectTo: '/acade',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
