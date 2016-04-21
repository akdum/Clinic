System.register(['angular2/core', '../../services/contacts.service', '../../services/utilities.service'], function(exports_1, context_1) {
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
    var core_1, contacts_service_1, utilities_service_1;
    var ContactsFooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            ContactsFooterComponent = (function () {
                function ContactsFooterComponent(_contactsService, _utilities) {
                    this._contactsService = _contactsService;
                    this._utilities = _utilities;
                    this.contact = this._utilities.getBlankContacts();
                }
                ContactsFooterComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactsFooterComponent.prototype.getContacts = function () {
                    this._contactsService.getContacts().then(function (data) {
                        this.contact = data;
                    }.bind(this));
                };
                ContactsFooterComponent = __decorate([
                    core_1.Component({
                        selector: 'contacts-footer-component',
                        templateUrl: '../app/templates/contacts.footer.component.html'
                    }), 
                    __metadata('design:paramtypes', [contacts_service_1.ContactsService, utilities_service_1.UtilitiesService])
                ], ContactsFooterComponent);
                return ContactsFooterComponent;
            }());
            exports_1("ContactsFooterComponent", ContactsFooterComponent);
        }
    }
});
//# sourceMappingURL=contacts.footer.component.js.map