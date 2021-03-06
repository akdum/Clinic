System.register(['@angular/core', './db.service'], function(exports_1, context_1) {
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
    var DoctorsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            }],
        execute: function() {
            DoctorsService = (function () {
                function DoctorsService(_db) {
                    this._db = _db;
                    this._doctors = [];
                }
                DoctorsService.prototype.getDoctorsByUrls = function (urls) {
                    var _this = this;
                    if (this._doctors.length > 0) {
                        return Promise.resolve(this.filterDoctorsByUrls(urls));
                    }
                    else {
                        // try to load doctors first.
                        return new Promise(function (resolve) { return _this._db.getDoctors().then(function (data) {
                            this._doctors = data;
                            resolve(this.filterDoctorsByUrls(urls));
                        }.bind(_this)); });
                    }
                };
                DoctorsService.prototype.getDoctors = function () {
                    var _this = this;
                    if (this._doctors.length > 0) {
                        return Promise.resolve(this._doctors);
                    }
                    else {
                        return new Promise(function (resolve) { return _this._db.getDoctors().then(function (data) {
                            this._doctors = data;
                            resolve(this._doctors);
                        }.bind(_this)); });
                    }
                };
                DoctorsService.prototype.filterDoctorsByUrls = function (urls) {
                    var _this = this;
                    var returnArray = [];
                    urls.forEach(function (url) {
                        var doctor = _this._doctors.filter(function (d) { return d.url === url; });
                        if (doctor.length > 0)
                            returnArray.push(doctor[0]);
                    });
                    return returnArray;
                };
                DoctorsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [db_service_1.DbService])
                ], DoctorsService);
                return DoctorsService;
            }());
            exports_1("DoctorsService", DoctorsService);
        }
    }
});
//# sourceMappingURL=doctors.service.js.map