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
    var ServicesPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            }],
        execute: function() {
            ServicesPageComponent = (function () {
                function ServicesPageComponent(_services) {
                    this._services = _services;
                    this._rows = [];
                }
                ServicesPageComponent.prototype.ngOnInit = function () {
                    this._services.getListOfServices().then(function (data) {
                        this._servicesList = data;
                        this.prepareRows();
                    }.bind(this));
                };
                ServicesPageComponent.prototype.prepareRows = function () {
                    var count = Math.floor(this._servicesList.length / 3);
                    var reminder = this._servicesList.length % 3;
                    if (count && count > 0) {
                        for (var index = 0; index < count; index++) {
                            var row = [];
                            for (var j = 0; j < 3; j++) {
                                row.push(this._servicesList[index * 3 + j]);
                            }
                            this._rows.push(row);
                        }
                    }
                    if (reminder && reminder > 0) {
                        var row = [];
                        for (var index = reminder - 1; index >= 0; index--) {
                            row.push(this._servicesList[this._servicesList.length - index]);
                        }
                        this._rows.push(row);
                    }
                };
                ServicesPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/services.page.component.html'
                    }), 
                    __metadata('design:paramtypes', [services_service_1.ServicesService])
                ], ServicesPageComponent);
                return ServicesPageComponent;
            }());
            exports_1("ServicesPageComponent", ServicesPageComponent);
        }
    }
});
//# sourceMappingURL=services.page.component.js.map