System.register(['angular2/core', '../../../services/services.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, services_service_1, router_1;
    var ServicesPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ServicesPageComponent = (function () {
                function ServicesPageComponent(_services, _router) {
                    this._services = _services;
                    this._router = _router;
                }
                ServicesPageComponent.prototype.ngOnInit = function () {
                    this._services.getServicesGrouped().then(function (data) {
                        this._servicesData = data;
                    }.bind(this));
                };
                ServicesPageComponent.prototype.gotoServicesGroupDetail = function (servicesGroup) {
                    var link = ['ServicesGroupDetailsPage', { url: servicesGroup.url }];
                    this._router.navigate(link);
                };
                ServicesPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/services.page.component.html'
                    }), 
                    __metadata('design:paramtypes', [services_service_1.ServicesService, router_1.Router])
                ], ServicesPageComponent);
                return ServicesPageComponent;
            }());
            exports_1("ServicesPageComponent", ServicesPageComponent);
        }
    }
});
//# sourceMappingURL=services.page.component.js.map