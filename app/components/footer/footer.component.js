System.register(['@angular/core', './contacts.footer.component', './enroll.footer.component', './nav.footer.component'], function(exports_1, context_1) {
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
    var core_1, contacts_footer_component_1, enroll_footer_component_1, nav_footer_component_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_footer_component_1_1) {
                contacts_footer_component_1 = contacts_footer_component_1_1;
            },
            function (enroll_footer_component_1_1) {
                enroll_footer_component_1 = enroll_footer_component_1_1;
            },
            function (nav_footer_component_1_1) {
                nav_footer_component_1 = nav_footer_component_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                    this.onOpenEnrollModalFooter = new core_1.EventEmitter();
                }
                FooterComponent.prototype.onOpenEnrollModalHandler = function (open) {
                    this.onOpenEnrollModalFooter.emit(open);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FooterComponent.prototype, "onOpenEnrollModalFooter", void 0);
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer-component',
                        templateUrl: '../app/templates/footer.component.html',
                        directives: [contacts_footer_component_1.ContactsFooterComponent, enroll_footer_component_1.EnrollFooterComponent, nav_footer_component_1.NavFooterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map