System.register(['angular2/core', 'angular2/router', './header/header.component', './nav/nav.component', './footer/footer.component', './dialog/enroll.modal.component', './pages/main-page/main.page.component', './pages/contacts-page/contacts.page.component'], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, nav_component_1, footer_component_1, enroll_modal_component_1, main_page_component_1, contacts_page_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (enroll_modal_component_1_1) {
                enroll_modal_component_1 = enroll_modal_component_1_1;
            },
            function (main_page_component_1_1) {
                main_page_component_1 = main_page_component_1_1;
            },
            function (contacts_page_component_1_1) {
                contacts_page_component_1 = contacts_page_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.openEnrollModal = false;
                }
                // dialog start.
                AppComponent.prototype.onOpenEnrollModalNavHandler = function (open) {
                    this.openEnrollModal = open;
                };
                AppComponent.prototype.onOpenEnrollModalFooterHandler = function (open) {
                    this.openEnrollModal = open;
                };
                AppComponent.prototype.onCloseEnrollModalHandler = function (isOpen) {
                    this.openEnrollModal = isOpen;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'clinic-app',
                        templateUrl: '../app/templates/app.component.html',
                        directives: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, enroll_modal_component_1.EnrollModalComponent, router_1.ROUTER_DIRECTIVES, contacts_page_component_1.ContactsPageComponent, nav_component_1.NavComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'MainPage',
                            component: main_page_component_1.MainPageComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/contacts',
                            name: 'ContactsPage',
                            component: contacts_page_component_1.ContactsPageComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map