System.register(['angular2/core', '../data-interfaces/services.group', '../data-interfaces/service', '../data-interfaces/contacts', '../data-interfaces/doctor.viewmodel', '../config/config'], function(exports_1, context_1) {
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
    var core_1, services_group_1, service_1, contacts_1, doctor_viewmodel_1, config_1;
    var UtilitiesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_group_1_1) {
                services_group_1 = services_group_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            },
            function (doctor_viewmodel_1_1) {
                doctor_viewmodel_1 = doctor_viewmodel_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            UtilitiesService = (function () {
                function UtilitiesService() {
                }
                UtilitiesService.prototype.getStringFromField = function (field) {
                    return field ? field.S : "";
                };
                ;
                UtilitiesService.prototype.getNumberFromField = function (field) {
                    return field ? field.N : 0;
                };
                ;
                UtilitiesService.prototype.getBooleanFromField = function (field) {
                    return field ? field.BOOL : false;
                };
                UtilitiesService.prototype.getListFromField = function (field) {
                    return field ? field.L : [];
                };
                UtilitiesService.prototype.getListTextFromField = function (field) {
                    var _this = this;
                    if (field) {
                        var textList = field.L;
                        var returnList = [];
                        for (var index = 0; index < textList.length; index = index + 3) {
                            if ((index + 2) < textList.length) {
                                returnList.push({ heading: this.getStringFromField(textList[index]),
                                    value: this.getStringFromField(textList[index + 1]),
                                    imageNames: this.getListFromField(textList[index + 2]).map(function (val) { return _this.getStringFromField(val); }) });
                            }
                        }
                        return returnList;
                    }
                    else
                        return [];
                };
                UtilitiesService.prototype.getBlankServicesGroup = function () {
                    return new services_group_1.ServicesGroup("", "", "", "", []);
                };
                UtilitiesService.prototype.getBlankService = function () {
                    return new service_1.Service("", "", "", "", false, false, "", []);
                };
                UtilitiesService.prototype.getBlankContacts = function () {
                    return new contacts_1.Contacts("", "", [], [], "", "", "");
                };
                UtilitiesService.prototype.replaceOrAddItemInArrayByUrl = function (array, item, url) {
                    var index = array.findIndex(function (val) { return val.url === url; });
                    if (index > -1) {
                        array[index] = item;
                    }
                    else {
                        array.push(item);
                    }
                };
                UtilitiesService.prototype.convertDoctorArrayToDoctorViewModelArray = function (doctors) {
                    return doctors.map(function (d) { return new doctor_viewmodel_1.DoctorViewModel(d.name, d.therapy, d.url, config_1.CONFIG.DB.BUCKETS.DOCTORS_PHOTO + d.photoName, d.text); });
                };
                UtilitiesService.prototype.findBootstrapEnvironment = function () {
                    var envs = ['xs', 'sm', 'md', 'lg'];
                    var $el = $('<div>');
                    $el.appendTo($('body'));
                    for (var i = envs.length - 1; i >= 0; i--) {
                        var env = envs[i];
                        $el.addClass('hidden-' + env + '-up');
                        if ($el.is(':hidden')) {
                            $el.remove();
                            return env;
                        }
                    }
                };
                UtilitiesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilitiesService);
                return UtilitiesService;
            }());
            exports_1("UtilitiesService", UtilitiesService);
        }
    }
});
//# sourceMappingURL=utilities.service.js.map