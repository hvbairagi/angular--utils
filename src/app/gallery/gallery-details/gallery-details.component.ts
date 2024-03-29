import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css'],
})
export class GalleryDetailsComponent implements OnInit {
  gallery: Gallery = {
    _id: '',
    imageUrl: '',
    imageTitle: '',
    imageDesc: '',
    uploaded: null,
  };
  isLoadingResults = false;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.getGalleryDetails(this.route.snapshot.paramMap.get('id'));
  }

  getGalleryDetails(id: string): void {
    this.api.getGalleryById(id).subscribe((data: any) => {
      this.gallery = data;
      this.isLoadingResults = false;
    });
  }
}
