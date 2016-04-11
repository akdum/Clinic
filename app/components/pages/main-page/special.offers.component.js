System.register(['angular2/core', '../../../services/special.offers.service'], function(exports_1, context_1) {
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
    var core_1, special_offers_service_1;
    var SpecialOffersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (special_offers_service_1_1) {
                special_offers_service_1 = special_offers_service_1_1;
            }],
        execute: function() {
            SpecialOffersComponent = (function () {
                function SpecialOffersComponent(_offers) {
                    this._offers = _offers;
                    this.specialOffers = [];
                }
                SpecialOffersComponent.prototype.ngOnInit = function () {
                    this.getSpecialOffers();
                };
                SpecialOffersComponent.prototype.getSpecialOffers = function () {
                    this._offers.getSpecialOffers().then(function (data) {
                        this.specialOffers = data;
                    }.bind(this));
                };
                SpecialOffersComponent = __decorate([
                    core_1.Component({
                        selector: 'special-offers-component',
                        templateUrl: '../app/templates/special.offers.component.html'
                    }), 
                    __metadata('design:paramtypes', [special_offers_service_1.SpecialOffersService])
                ], SpecialOffersComponent);
                return SpecialOffersComponent;
            }());
            exports_1("SpecialOffersComponent", SpecialOffersComponent);
        }
    }
});
//# sourceMappingURL=special.offers.component.js.map