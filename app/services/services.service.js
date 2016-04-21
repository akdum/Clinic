System.register(['angular2/core', './db.service', './utilities.service'], function(exports_1, context_1) {
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
    var core_1, db_service_1, utilities_service_1;
    var ServicesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            ServicesService = (function () {
                function ServicesService(_db, _utilities) {
                    this._db = _db;
                    this._utilities = _utilities;
                    this._services = [];
                    this._serviceGroups = [];
                    this._groupedServices = [];
                }
                //Get all services.
                ServicesService.prototype.getServices = function () {
                    var _this = this;
                    if (this._services.length > 0) {
                        return Promise.resolve(this._services);
                    }
                    else {
                        return new Promise(function (resolve) { return _this._db.getServicesItems().then(function (data) {
                            this._services = data;
                            resolve(this._services);
                        }.bind(_this)).catch(function (err) {
                            console.log(err);
                        }); });
                    }
                };
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
                ServicesService.prototype.getServicesGrouped = function () {
                    var _this = this;
                    var promiseArray = [this.getServices(), this.getServiceGroups()];
                    return new Promise(function (resolve) { return Promise.all(promiseArray).then(function (results) {
                        var _this = this;
                        this._groupedServices = [];
                        this._serviceGroups.forEach(function (group, i) {
                            _this._groupedServices.push(group);
                            var groupServices = _this._services.filter(function (value) { return value.group == group.title; });
                            _this._groupedServices[i]["services"] = [];
                            groupServices.forEach(function (service) {
                                _this._groupedServices[i].services.push(service);
                            });
                        });
                        resolve(this._groupedServices);
                    }.bind(_this)); });
                };
                ServicesService.prototype.getServicesGroupByUrl = function (url) {
                    var _this = this;
                    if (this._serviceGroups.length > 0) {
                        return this.tryGetServiceGroupDetails(url);
                    }
                    else {
                        // try to load groups first.
                        var promiseArray_1 = [this.getServices(), this.getServiceGroups()];
                        return new Promise(function (resolve) { return Promise.all(promiseArray_1).then(function (results) {
                            resolve(this.tryGetServiceGroupDetails(url));
                        }.bind(_this)); });
                    }
                };
                // get service by url.
                ServicesService.prototype.getServiceByUrl = function (url) {
                    var _this = this;
                    if (this._services.length > 0) {
                        return this.tryGetService(url);
                    }
                    else {
                        // try load services array first.
                        return new Promise(function (resolve) { return _this.getServices().then(function (data) {
                            resolve(this.tryGetService(url));
                        }.bind(_this)); });
                    }
                };
                ServicesService.prototype.tryGetServiceGroupDetails = function (url) {
                    var _this = this;
                    var services = this._serviceGroups.find(function (val) { return val.url == url; });
                    if (services) {
                        if (services.text.length > 0) {
                            return Promise.resolve(services);
                        }
                        else {
                            return new Promise(function (resolve) { return _this._db.getServicesGroupDetailsByName(services.title).then(function (data) {
                                services = data;
                                services["services"] = this._services.filter(function (val) { return val.group === services.title; });
                                this._utilities.replaceOrAddItemInArrayByUrl(this._serviceGroups, services, url);
                                resolve(services);
                            }.bind(_this)); });
                        }
                    }
                    else {
                        return Promise.resolve(this._utilities.getBlankServicesGroup());
                    }
                };
                ServicesService.prototype.tryGetService = function (url) {
                    var _this = this;
                    var service = this._services.find(function (val) { return val.url === url; });
                    if (service) {
                        if (service.text.length > 0) {
                            return Promise.resolve(service);
                        }
                        else {
                            return new Promise(function (resolve) { return _this._db.getServiceDetailsByName(service.title).then(function (data) {
                                service = data;
                                this._utilities.replaceOrAddItemInArrayByUrl(this._services, service, url);
                                resolve(service);
                            }.bind(_this)); });
                        }
                    }
                    else {
                        return Promise.resolve(this._utilities.getBlankService());
                    }
                };
                ServicesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [db_service_1.DbService, utilities_service_1.UtilitiesService])
                ], ServicesService);
                return ServicesService;
            }());
            exports_1("ServicesService", ServicesService);
        }
    }
});
//# sourceMappingURL=services.service.js.map