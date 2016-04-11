///<reference path="../../../typings/browser/ambient/bootstrap/index.d.ts" />
///<reference path="../../../typings/browser/ambient/jquery/index.d.ts" />
System.register(['angular2/core', '../../services/assets.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, assets_service_1;
    var CarouselComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (assets_service_1_1) {
                assets_service_1 = assets_service_1_1;
            }],
        execute: function() {
            CarouselComponent = (function () {
                function CarouselComponent(_assetsService) {
                    this._assetsService = _assetsService;
                    this.imagesUrls = _assetsService.getCarousel();
                    this.CAROUSEL_CLASS = ".carousel";
                }
                CarouselComponent.prototype.ngAfterViewInit = function () {
                    var carousel = $(this.CAROUSEL_CLASS);
                    carousel.carousel({ interval: 5000 });
                };
                CarouselComponent = __decorate([
                    core_1.Component({
                        selector: 'carousel-component',
                        templateUrl: '../app/templates/carousel.component.html'
                    }), 
                    __metadata('design:paramtypes', [assets_service_1.AssetsService])
                ], CarouselComponent);
                return CarouselComponent;
            }());
            exports_1("CarouselComponent", CarouselComponent);
        }
    }
});
//# sourceMappingURL=carousel.component.js.map