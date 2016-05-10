System.register(['@angular/core', '../../config/config'], function(exports_1, context_1) {
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
    var core_1, config_1;
    var CommonPhotoGalleryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CommonPhotoGalleryComponent = (function () {
                function CommonPhotoGalleryComponent() {
                    this._imageUrls = [];
                }
                Object.defineProperty(CommonPhotoGalleryComponent.prototype, "imageNames", {
                    set: function (imageNames) {
                        if (imageNames && imageNames.length > 0) {
                            this._imageUrls = imageNames.map(function (val) { return config_1.CONFIG.DB.BUCKETS.PHOTO_GALLERY + val; });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], CommonPhotoGalleryComponent.prototype, "imageNames", null);
                CommonPhotoGalleryComponent = __decorate([
                    core_1.Component({
                        selector: 'common-photo-gallery',
                        templateUrl: '../app/templates/common.photo.gallery.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommonPhotoGalleryComponent);
                return CommonPhotoGalleryComponent;
            }());
            exports_1("CommonPhotoGalleryComponent", CommonPhotoGalleryComponent);
        }
    }
});
//# sourceMappingURL=common.photo.gallery.component.js.map