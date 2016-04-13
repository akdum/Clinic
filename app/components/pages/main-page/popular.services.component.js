System.register(['angular2/core', '../../../services/services.service'], function(exports_1, context_1) {
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
    var core_1, services_service_1;
    var PopularServicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            }],
        execute: function() {
            PopularServicesComponent = (function () {
                function PopularServicesComponent(_services) {
                    this._services = _services;
                }
                PopularServicesComponent.prototype.ngOnInit = function () {
                    this.getServices();
                };
                PopularServicesComponent.prototype.getServices = function () {
                    this._services.getPopularServices().then(function (data) {
                        if (data && data.length > 0) {
                            this._servicesList = data;
                        }
                    }.bind(this));
                };
                PopularServicesComponent = __decorate([
                    core_1.Component({
                        selector: 'popular-services-component',
                        templateUrl: '../app/templates/popular.services.component.html'
                    }), 
                    __metadata('design:paramtypes', [services_service_1.ServicesService])
                ], PopularServicesComponent);
                return PopularServicesComponent;
            }());
            exports_1("PopularServicesComponent", PopularServicesComponent);
        }
    }
});
//# sourceMappingURL=popular.services.component.js.map