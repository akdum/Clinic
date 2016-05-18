System.register(['@angular/core', '../../../services/assets.service'], function(exports_1, context_1) {
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
    var GetDiscountPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (assets_service_1_1) {
                assets_service_1 = assets_service_1_1;
            }],
        execute: function() {
            GetDiscountPageComponent = (function () {
                function GetDiscountPageComponent(_assets) {
                    this._assets = _assets;
                    this._printAssetUrl = this._assets.getUrlByName("print.jpg");
                    this._date = this.getDate();
                    this._number = Math.floor(this.getRandomArbitrary(100000, 999999)).toString();
                }
                GetDiscountPageComponent.prototype.getRandomArbitrary = function (min, max) {
                    return Math.random() * (max - min) + min;
                };
                GetDiscountPageComponent.prototype.getDate = function () {
                    var today = new Date();
                    var dd;
                    var mm; //January is 0!
                    var yyyy = today.getFullYear();
                    if (today.getDate() < 10) {
                        dd = '0' + today.getDate().toString();
                    }
                    else {
                        dd = today.getDate().toString();
                    }
                    if (today.getMonth() + 1 < 10) {
                        mm = '0' + (today.getMonth() + 1).toString();
                    }
                    else {
                        mm = (today.getMonth() + 1).toString();
                    }
                    return dd + '/' + mm + '/' + yyyy;
                };
                GetDiscountPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/get.discount.page.component.html'
                    }), 
                    __metadata('design:paramtypes', [assets_service_1.AssetsService])
                ], GetDiscountPageComponent);
                return GetDiscountPageComponent;
            }());
            exports_1("GetDiscountPageComponent", GetDiscountPageComponent);
        }
    }
});
//# sourceMappingURL=get.discount.page.component.js.map