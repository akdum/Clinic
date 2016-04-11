System.register(['angular2/core', './enroll.data'], function(exports_1, context_1) {
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
    var core_1, enroll_data_1;
    var EnrollModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (enroll_data_1_1) {
                enroll_data_1 = enroll_data_1_1;
            }],
        execute: function() {
            EnrollModalComponent = (function () {
                function EnrollModalComponent() {
                    this.MODAL_ID = "enroll-modal";
                    this._isOpened = false;
                    this.onCloseEnrollModal = new core_1.EventEmitter();
                    this.model = new enroll_data_1.EnrollData("", "", "");
                }
                Object.defineProperty(EnrollModalComponent.prototype, "open", {
                    set: function (open) {
                        if (this._modal && open) {
                            this._modal.modal({ backdrop: false });
                            this._isOpened = true;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                EnrollModalComponent.prototype.ngOnInit = function () {
                    this._modal = $("#" + this.MODAL_ID);
                };
                EnrollModalComponent.prototype.onEnroll = function () {
                    console.log(JSON.stringify(this.model));
                    this.emitClose();
                };
                EnrollModalComponent.prototype.dismiss = function () {
                    this.emitClose();
                };
                EnrollModalComponent.prototype.emitClose = function () {
                    this._modal.modal('hide');
                    this._isOpened = false;
                    this.onCloseEnrollModal.emit(false);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], EnrollModalComponent.prototype, "open", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], EnrollModalComponent.prototype, "onCloseEnrollModal", void 0);
                EnrollModalComponent = __decorate([
                    core_1.Component({
                        selector: 'enroll-modal-component',
                        templateUrl: '../app/templates/enroll.modal.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EnrollModalComponent);
                return EnrollModalComponent;
            }());
            exports_1("EnrollModalComponent", EnrollModalComponent);
        }
    }
});
//# sourceMappingURL=enroll.modal.component.js.map