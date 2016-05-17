System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CommonTabsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CommonTabsComponent = (function () {
                function CommonTabsComponent() {
                    this.onChangeActiveTab = new core_1.EventEmitter();
                }
                Object.defineProperty(CommonTabsComponent.prototype, "tabs", {
                    set: function (tabs) {
                        if (tabs && tabs.length > 0) {
                            this._activeTab = tabs[0].internalName;
                            this._tabs = tabs;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                CommonTabsComponent.prototype.IsTabActive = function (name) {
                    return name == this._activeTab;
                };
                CommonTabsComponent.prototype.SetActiveTab = function ($event) {
                    this._activeTab = $event.target.id;
                    this.onChangeActiveTab.emit(this._activeTab);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CommonTabsComponent.prototype, "onChangeActiveTab", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], CommonTabsComponent.prototype, "tabs", null);
                CommonTabsComponent = __decorate([
                    core_1.Component({
                        selector: 'common-tabs-component',
                        templateUrl: '../app/templates/common.tabs.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommonTabsComponent);
                return CommonTabsComponent;
            }());
            exports_1("CommonTabsComponent", CommonTabsComponent);
        }
    }
});
//# sourceMappingURL=common.tabs.component.js.map