import { Component, Input} from '@angular/core';
import { CONFIG } from '../../config/config';

@Component({
    selector: 'common-photo-gallery',
    templateUrl: '../app/templates/common.photo.gallery.component.html'
})
export class CommonPhotoGalleryComponent {
    private _imageUrls: string[] = [];
    
    @Input() 
    set imageNames(imageNames:string[]) {
        if (imageNames && imageNames.length > 0) {
            this._imageUrls = imageNames.map(val=> CONFIG.DB.BUCKETS.PHOTO_GALLERY + val);
        }
    }    
}