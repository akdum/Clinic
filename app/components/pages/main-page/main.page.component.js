System.register(['@angular/core', './popular.services.component', './special.offers.component', './news.component'], function(exports_1, context_1) {
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
    var core_1, popular_services_component_1, special_offers_component_1, news_component_1;
    var MainPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (popular_services_component_1_1) {
                popular_services_component_1 = popular_services_component_1_1;
            },
            function (special_offers_component_1_1) {
                special_offers_component_1 = special_offers_component_1_1;
            },
            function (news_component_1_1) {
                news_component_1 = news_component_1_1;
            }],
        execute: function() {
            MainPageComponent = (function () {
                function MainPageComponent() {
                }
                MainPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/main.page.component.html',
                        directives: [popular_services_component_1.PopularServicesComponent, special_offers_component_1.SpecialOffersComponent, news_component_1.NewsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPageComponent);
                return MainPageComponent;
            }());
            exports_1("MainPageComponent", MainPageComponent);
        }
    }
});
//# sourceMappingURL=main.page.component.js.map