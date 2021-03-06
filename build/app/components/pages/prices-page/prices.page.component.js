System.register(['@angular/core', '../../../services/services.service', '../../common/common.price.component'], function(exports_1, context_1) {
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
    var core_1, services_service_1, common_price_component_1;
    var PricesPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            },
            function (common_price_component_1_1) {
                common_price_component_1 = common_price_component_1_1;
            }],
        execute: function() {
            PricesPageComponent = (function () {
                function PricesPageComponent(_service) {
                    this._service = _service;
                    this._services = [];
                }
                PricesPageComponent.prototype.ngOnInit = function () {
                    this._service.getServices().then(function (data) {
                        if (data) {
                            this._services = data;
                        }
                    }.bind(this));
                };
                PricesPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/prices.page.component.html',
                        directives: [common_price_component_1.CommonPriceComponent]
                    }), 
                    __metadata('design:paramtypes', [services_service_1.ServicesService])
                ], PricesPageComponent);
                return PricesPageComponent;
            }());
            exports_1("PricesPageComponent", PricesPageComponent);
        }
    }
});
//# sourceMappingURL=prices.page.component.js.map