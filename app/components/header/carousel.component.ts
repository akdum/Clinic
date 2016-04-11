///<reference path="../../../typings/browser/ambient/bootstrap/index.d.ts" />
///<reference path="../../../typings/browser/ambient/jquery/index.d.ts" />

import {Component, AfterViewInit} from 'angular2/core';
import {AssetsService} from '../../services/assets.service'

@Component({
    selector: 'carousel-component',
    templateUrl: '../app/templates/carousel.component.html'
})
export class CarouselComponent implements AfterViewInit {
    public imagesUrls: string[];
    private CAROUSEL_CLASS: string;
    
    constructor(private _assetsService: AssetsService){
        this.imagesUrls = _assetsService.getCarousel();
        this.CAROUSEL_CLASS = ".carousel";
    }
    
    ngAfterViewInit() {
        let carousel = $(this.CAROUSEL_CLASS);
        carousel.carousel({ interval: 5000 });
    }
}