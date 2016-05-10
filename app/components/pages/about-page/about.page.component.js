System.register(['@angular/core', '../../../services/about.service', '../../../services/utilities.service', '../../common/common.text.component', './comments.component', '../../common/common.photo.gallery.component'], function(exports_1, context_1) {
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
    var core_1, about_service_1, utilities_service_1, common_text_component_1, comments_component_1, common_photo_gallery_component_1;
    var AboutPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            },
            function (common_text_component_1_1) {
                common_text_component_1 = common_text_component_1_1;
            },
            function (comments_component_1_1) {
                comments_component_1 = comments_component_1_1;
            },
            function (common_photo_gallery_component_1_1) {
                common_photo_gallery_component_1 = common_photo_gallery_component_1_1;
            }],
        execute: function() {
            AboutPageComponent = (function () {
                function AboutPageComponent(_aboutService, _utilities) {
                    this._aboutService = _aboutService;
                    this._utilities = _utilities;
                    this._activeTab = "rights";
                    this._about = this._utilities.getBlankAbout();
                }
                AboutPageComponent.prototype.ngOnInit = function () {
                    this._aboutService.getAboutText().then(function (about) {
                        this._about = about;
                    }.bind(this));
                };
                AboutPageComponent.prototype.SetActiveTab = function (tab) {
                    if (tab.attributes["data-id"]) {
                        this._activeTab = tab.attributes["data-id"].value;
                    }
                };
                AboutPageComponent.prototype.IsTabActive = function (tab) {
                    if (tab.attributes["data-id"]) {
                        var value = tab.attributes["data-id"].value;
                        return value == this._activeTab;
                    }
                    else
                        return false;
                };
                AboutPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/about.page.component.html',
                        directives: [common_text_component_1.CommonTextComponent, comments_component_1.CommentsComponent, common_photo_gallery_component_1.CommonPhotoGalleryComponent]
                    }), 
                    __metadata('design:paramtypes', [about_service_1.AboutService, utilities_service_1.UtilitiesService])
                ], AboutPageComponent);
                return AboutPageComponent;
            }());
            exports_1("AboutPageComponent", AboutPageComponent);
        }
    }
});
//# sourceMappingURL=about.page.component.js.map