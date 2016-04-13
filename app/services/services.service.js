System.register(['angular2/core', './db.service'], function(exports_1, context_1) {
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
    var core_1, db_service_1;
    var ServicesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            }],
        execute: function() {
            ServicesService = (function () {
                function ServicesService(_db) {
                    this._db = _db;
                    this._services = [];
                    this._serviceGroups = [];
                    this._groupedServices = [];
                }
                ServicesService.prototype.getPopularServices = function () {
                    var _this = this;
                    if (this._services.length > 0) {
                        return Promise.resolve(this._services.filter(function (value) { return value.isPopular; }));
                    }
                    else {
                        return new Promise(function (resolve) { return _this._db.getServicesItems().then(function (data) {
                            this._services = data;
                            resolve(this._services.filter(function (value) { return value.isPopular; }));
                        }.bind(_this)).catch(function (err) {
                            console.log(err);
                        }); });
                    }
                };
                ServicesService.prototype.getServiceGroups = function () {
                    var _this = this;
                    if (this._serviceGroups.length > 0) {
                        return Promise.resolve(this._serviceGroups);
                    }
                    else {
                        return new Promise(function (resolve) { return _this._db.getServiceGroups().then(function (data) {
                            this._serviceGroups = data;
                            resolve(this._serviceGroups);
                        }.bind(_this)).catch(function (err) {
                            console.log(err);
                        }); });
                    }
                };
                ServicesService.prototype.getServicesByGroup = function (name) {
                };
                ServicesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [db_service_1.DbService])
                ], ServicesService);
                return ServicesService;
            }());
            exports_1("ServicesService", ServicesService);
        }
    }
});
//# sourceMappingURL=services.service.js.map