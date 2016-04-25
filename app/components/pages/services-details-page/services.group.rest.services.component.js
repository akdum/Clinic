System.register(['angular2/core', '../../../services/utilities.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, utilities_service_1, router_1;
    var ServicesGroupRestServicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ServicesGroupRestServicesComponent = (function () {
                function ServicesGroupRestServicesComponent(_utilities, _router) {
                    this._utilities = _utilities;
                    this._router = _router;
                    this._services = [];
                }
                Object.defineProperty(ServicesGroupRestServicesComponent.prototype, "services", {
                    set: function (services) {
                        var _this = this;
                        if (services) {
                            this._services = services.filter(function (val) { return !val.isPopular; });
                            if (this._utilities.findBootstrapEnvironment() == 'lg') {
                                var popularServices = services.filter(function (val) { return val.isPopular; });
                                if (popularServices.length > 3) {
                                    popularServices.slice(3).forEach(function (val) { return _this._services.push(val); });
                                }
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ServicesGroupRestServicesComponent.prototype.gotoServiceDetails = function (service) {
                    var link = ['ServiceDetailsPage', { url: service.url }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], ServicesGroupRestServicesComponent.prototype, "services", null);
                ServicesGroupRestServicesComponent = __decorate([
                    core_1.Component({
                        selector: 'services-group-rest-services-component',
                        templateUrl: '../app/templates/services.group.rest.services.component.html'
                    }), 
                    __metadata('design:paramtypes', [utilities_service_1.UtilitiesService, router_1.Router])
                ], ServicesGroupRestServicesComponent);
                return ServicesGroupRestServicesComponent;
            }());
            exports_1("ServicesGroupRestServicesComponent", ServicesGroupRestServicesComponent);
        }
    }
});
//# sourceMappingURL=services.group.rest.services.component.js.map