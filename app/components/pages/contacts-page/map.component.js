System.register(['angular2/core'], function(exports_1, context_1) {
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
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent() {
                }
                MapComponent.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this._intervalId = setInterval(function () { if (ymaps.Map) {
                        _this.init();
                    } }, '300');
                };
                MapComponent.prototype.init = function () {
                    try {
                        this._map = new ymaps.Map("map", {
                            center: [56.86211253, 53.28120296],
                            zoom: 16
                        });
                        var placemark = new ymaps.Placemark([56.86207381, 53.28129593], {
                            hintContent: 'Клиника'
                        });
                        this._map.geoObjects.add(placemark);
                        clearInterval(this._intervalId);
                    }
                    catch (error) {
                        console.log(error);
                        clearInterval(this._intervalId);
                    }
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map-component',
                        templateUrl: '../app/templates/map.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map