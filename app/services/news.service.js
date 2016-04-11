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
    var NewsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            }],
        execute: function() {
            NewsService = (function () {
                function NewsService(_db) {
                    this._db = _db;
                    this.newsList = [];
                }
                NewsService.prototype.getShortList = function () {
                    var _this = this;
                    if (this.newsList.length > 0) {
                        return Promise.resolve(this.getNewsItemsWithLimit(this.newsList));
                    }
                    else {
                        // query news.
                        return new Promise(function (resolve) { return _this._db.getNewsItems().then(function (data) {
                            this.newsList = data;
                            resolve(this.getNewsItemsWithLimit(this.newsList));
                        }.bind(_this)).catch(function (err) {
                            console.log(err);
                        }); });
                    }
                };
                NewsService.prototype.getNewsItemsWithLimit = function (newsItems) {
                    if (newsItems.length > 3) {
                        return newsItems.slice(0, 3);
                    }
                    else {
                        return newsItems;
                    }
                };
                NewsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [db_service_1.DbService])
                ], NewsService);
                return NewsService;
            }());
            exports_1("NewsService", NewsService);
        }
    }
});
//# sourceMappingURL=news.service.js.map