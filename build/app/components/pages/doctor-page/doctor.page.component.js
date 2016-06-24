System.register(['@angular/core', '@angular/router-deprecated', '../../common/common.text.component', '../../common/common.title.component', '../../common/common.back.component', '../../../services/doctors.service', '../../../services/utilities.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, common_text_component_1, common_title_component_1, common_back_component_1, doctors_service_1, utilities_service_1;
    var DoctorPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (common_text_component_1_1) {
                common_text_component_1 = common_text_component_1_1;
            },
            function (common_title_component_1_1) {
                common_title_component_1 = common_title_component_1_1;
            },
            function (common_back_component_1_1) {
                common_back_component_1 = common_back_component_1_1;
            },
            function (doctors_service_1_1) {
                doctors_service_1 = doctors_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            }],
        execute: function() {
            DoctorPageComponent = (function () {
                function DoctorPageComponent(_routeParams, _doctors, _utilities) {
                    this._routeParams = _routeParams;
                    this._doctors = _doctors;
                    this._utilities = _utilities;
                    this._backRouteName = "DoctorsPage";
                    this._backTitle = "Вернуться в список врачей";
                    this._doctor = this._utilities.getBlankDoctor();
                }
                DoctorPageComponent.prototype.ngOnInit = function () {
                    var doctorUrl = this._routeParams.get('url');
                    if (doctorUrl) {
                        this._doctors.getDoctorsByUrls([doctorUrl]).then(function (data) {
                            if (data && data.length > 0) {
                                this._doctor = data[0];
                            }
                        }.bind(this));
                    }
                };
                DoctorPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/doctor.page.component.html',
                        directives: [common_text_component_1.CommonTextComponent, common_back_component_1.CommonBackComponent, common_title_component_1.CommonTitleComponent]
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, doctors_service_1.DoctorsService, utilities_service_1.UtilitiesService])
                ], DoctorPageComponent);
                return DoctorPageComponent;
            }());
            exports_1("DoctorPageComponent", DoctorPageComponent);
        }
    }
});
//# sourceMappingURL=doctor.page.component.js.map