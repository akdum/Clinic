System.register(['angular2/core', '../../services/doctors.service', '../../services/utilities.service'], function(exports_1, context_1) {
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
    var core_1, doctors_service_1, utilities_service_1;
    var CommonDoctorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (doctors_service_1_1) {
                doctors_service_1 = doctors_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            CommonDoctorsComponent = (function () {
                function CommonDoctorsComponent(_doctorsService, _utilities) {
                    this._doctorsService = _doctorsService;
                    this._utilities = _utilities;
                    this._doctors = [];
                }
                Object.defineProperty(CommonDoctorsComponent.prototype, "therapy", {
                    set: function (therapy) {
                        if (therapy) {
                            this._doctorsService.getDoctorsByTherapy(therapy).then(function (data) {
                                if (data.length > 0) {
                                    this._doctors = this._utilities.convertDoctorArrayToDoctorViewModelArray(data);
                                }
                                ;
                            }.bind(this));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CommonDoctorsComponent.prototype, "loadAll", {
                    set: function (loadAll) {
                        if (loadAll) {
                            this._doctorsService.getDoctors().then(function (data) {
                                if (data.length > 0) {
                                    this._doctors = this._utilities.convertDoctorArrayToDoctorViewModelArray(data);
                                }
                                ;
                            }.bind(this));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], CommonDoctorsComponent.prototype, "therapy", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], CommonDoctorsComponent.prototype, "loadAll", null);
                CommonDoctorsComponent = __decorate([
                    core_1.Component({
                        selector: 'common-doctors-component',
                        templateUrl: '../app/templates/common.doctors.component.html',
                        inputs: ['noTitle']
                    }), 
                    __metadata('design:paramtypes', [doctors_service_1.DoctorsService, utilities_service_1.UtilitiesService])
                ], CommonDoctorsComponent);
                return CommonDoctorsComponent;
            }());
            exports_1("CommonDoctorsComponent", CommonDoctorsComponent);
        }
    }
});
//# sourceMappingURL=common.doctors.component.js.map