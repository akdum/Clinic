System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ServicesGroupPopularComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ServicesGroupPopularComponent = (function () {
                function ServicesGroupPopularComponent(_router) {
                    this._router = _router;
                    this._popularServices = [];
                }
                Object.defineProperty(ServicesGroupPopularComponent.prototype, "services", {
                    set: function (services) {
                        if (services) {
                            this._popularServices = services.filter(function (val) { return val.isPopular; });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ServicesGroupPopularComponent.prototype.gotoServiceDetails = function (service) {
                    var link = ['ServiceDetailsPage', { url: service.url }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], ServicesGroupPopularComponent.prototype, "services", null);
                ServicesGroupPopularComponent = __decorate([
                    core_1.Component({
                        selector: 'services-group-popular-component',
                        templateUrl: '../app/templates/services.group.popular.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ServicesGroupPopularComponent);
                return ServicesGroupPopularComponent;
            }());
            exports_1("ServicesGroupPopularComponent", ServicesGroupPopularComponent);
        }
    }
});
//# sourceMappingURL=services.group.popular.component.js.map