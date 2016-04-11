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
    var SpecialOffersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            }],
        execute: function() {
            SpecialOffersService = (function () {
                function SpecialOffersService(_dbService) {
                    this._dbService = _dbService;
                    this._specialOffers = [];
                }
                SpecialOffersService.prototype.getSpecialOffers = function () {
                    var _this = this;
                    if (this._specialOffers.length > 0) {
                        return Promise.resolve(this._specialOffers);
                    }
                    else {
                        return new Promise(function (resolve) { return _this._dbService.getSpecialOffers().then(function (data) {
                            this._specialOffers = data;
                            resolve(data);
                        }.bind(_this)); });
                    }
                };
                SpecialOffersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [db_service_1.DbService])
                ], SpecialOffersService);
                return SpecialOffersService;
            }());
            exports_1("SpecialOffersService", SpecialOffersService);
        }
    }
});
//# sourceMappingURL=special.offers.service.js.map