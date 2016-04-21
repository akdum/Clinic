System.register(['angular2/core', '../../data-interfaces/text.viewmodel', '../../config/config'], function(exports_1, context_1) {
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
    var core_1, text_viewmodel_1, config_1;
    var CommonTextComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (text_viewmodel_1_1) {
                text_viewmodel_1 = text_viewmodel_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            CommonTextComponent = (function () {
                function CommonTextComponent() {
                    this._text = [];
                    this._isService = false;
                }
                Object.defineProperty(CommonTextComponent.prototype, "isService", {
                    set: function (isService) {
                        this._isService = isService;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CommonTextComponent.prototype, "text", {
                    set: function (text) {
                        if (text && text.length > 0) {
                            this._text = text.map(function (val) { return new text_viewmodel_1.TextViewModel(val.heading, val.value, false, val.imageNames.map(function (m) { return config_1.CONFIG.DB.BUCKETS.TEXT_IMAGES_URL + m; })); });
                            if (this._isService) {
                                this._text[0].isExpanded = true;
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                CommonTextComponent.prototype.toggle = function (text) {
                    text.isExpanded = !text.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], CommonTextComponent.prototype, "isService", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], CommonTextComponent.prototype, "text", null);
                CommonTextComponent = __decorate([
                    core_1.Component({
                        selector: 'common-text-component',
                        templateUrl: '../app/templates/common.text.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommonTextComponent);
                return CommonTextComponent;
            }());
            exports_1("CommonTextComponent", CommonTextComponent);
        }
    }
});
//# sourceMappingURL=common.text.component.js.map