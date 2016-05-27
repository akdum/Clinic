System.register(['@angular/core', '@angular/router-deprecated', './header/header.component', './nav/nav.component', './footer/footer.component', './pages/main-page/main.page.component', './pages/about-page/about.page.component', './pages/services-page/services.page.component', './pages/contacts-page/contacts.page.component', './pages/doctors-page/doctors.page.component', './pages/news-page/news.page.component', './pages/services-details-page/services.group.details.page.component', './pages/service-details-page/service.details.page.component', './pages/get-discount-page/get.discount.page.component', './pages/prices-page/prices.page.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, header_component_1, nav_component_1, footer_component_1, main_page_component_1, about_page_component_1, services_page_component_1, contacts_page_component_1, doctors_page_component_1, news_page_component_1, services_group_details_page_component_1, service_details_page_component_1, get_discount_page_component_1, prices_page_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (main_page_component_1_1) {
                main_page_component_1 = main_page_component_1_1;
            },
            function (about_page_component_1_1) {
                about_page_component_1 = about_page_component_1_1;
            },
            function (services_page_component_1_1) {
                services_page_component_1 = services_page_component_1_1;
            },
            function (contacts_page_component_1_1) {
                contacts_page_component_1 = contacts_page_component_1_1;
            },
            function (doctors_page_component_1_1) {
                doctors_page_component_1 = doctors_page_component_1_1;
            },
            function (news_page_component_1_1) {
                news_page_component_1 = news_page_component_1_1;
            },
            function (services_group_details_page_component_1_1) {
                services_group_details_page_component_1 = services_group_details_page_component_1_1;
            },
            function (service_details_page_component_1_1) {
                service_details_page_component_1 = service_details_page_component_1_1;
            },
            function (get_discount_page_component_1_1) {
                get_discount_page_component_1 = get_discount_page_component_1_1;
            },
            function (prices_page_component_1_1) {
                prices_page_component_1 = prices_page_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    _router.subscribe(function () {
                        window.scrollTo(0, 0);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'clinic-app',
                        templateUrl: '../app/templates/app.component.html',
                        directives: [header_component_1.HeaderComponent,
                            footer_component_1.FooterComponent,
                            router_deprecated_1.ROUTER_DIRECTIVES,
                            about_page_component_1.AboutPageComponent,
                            services_page_component_1.ServicesPageComponent,
                            contacts_page_component_1.ContactsPageComponent,
                            doctors_page_component_1.DoctorsPageComponent,
                            news_page_component_1.NewsPageComponent,
                            get_discount_page_component_1.GetDiscountPageComponent,
                            prices_page_component_1.PricesPageComponent,
                            nav_component_1.NavComponent]
                    }),
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/',
                            name: 'MainPage',
                            component: main_page_component_1.MainPageComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/about',
                            name: 'AboutPage',
                            component: about_page_component_1.AboutPageComponent
                        },
                        {
                            path: '/doctors',
                            name: 'DoctorsPage',
                            component: doctors_page_component_1.DoctorsPageComponent
                        },
                        {
                            path: '/services',
                            name: 'ServicesPage',
                            component: services_page_component_1.ServicesPageComponent
                        },
                        {
                            path: '/contacts',
                            name: 'ContactsPage',
                            component: contacts_page_component_1.ContactsPageComponent
                        },
                        {
                            path: '/services-group-details/:url',
                            name: 'ServicesGroupDetailsPage',
                            component: services_group_details_page_component_1.ServicesGroupDetailsPageComponent
                        },
                        {
                            path: '/service-details/:url',
                            name: 'ServiceDetailsPage',
                            component: service_details_page_component_1.ServiceDetailsPageComponent
                        },
                        {
                            path: '/news/:id',
                            name: 'NewsPage',
                            component: news_page_component_1.NewsPageComponent
                        },
                        {
                            path: '/discount',
                            name: 'DiscountPage',
                            component: get_discount_page_component_1.GetDiscountPageComponent
                        },
                        {
                            path: '/prices',
                            name: 'PricesPage',
                            component: prices_page_component_1.PricesPageComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map