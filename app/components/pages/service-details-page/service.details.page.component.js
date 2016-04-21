System.register(['angular2/core', './service.details.title.component', 'angular2/router', '../../../services/services.service', '../../../services/utilities.service'], function(exports_1, context_1) {
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
    var core_1, service_details_title_component_1, router_1, services_service_1, utilities_service_1;
    var ServiceDetailsPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_details_title_component_1_1) {
                service_details_title_component_1 = service_details_title_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            ServiceDetailsPageComponent = (function () {
                function ServiceDetailsPageComponent(_routeParams, _servicesService, _utilities) {
                    this._routeParams = _routeParams;
                    this._servicesService = _servicesService;
                    this._utilities = _utilities;
                    this._service = _utilities.getBlankService();
                }
                ServiceDetailsPageComponent.prototype.ngOnInit = function () {
                    var serviceUrl = this._routeParams.get('url');
                    if (serviceUrl) {
                        this._servicesService.getServiceByUrl(serviceUrl).then(function (data) {
                            if (data) {
                                this._service = data;
                            }
                        }.bind(this));
                    }
                };
                ServiceDetailsPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/service.details.page.component.html',
                        directives: [service_details_title_component_1.ServiceDetailsTitleComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, services_service_1.ServicesService, utilities_service_1.UtilitiesService])
                ], ServiceDetailsPageComponent);
                return ServiceDetailsPageComponent;
            }());
            exports_1("ServiceDetailsPageComponent", ServiceDetailsPageComponent);
        }
    }
});
//# sourceMappingURL=service.details.page.component.js.map