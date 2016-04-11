System.register(['angular2/core', '../../../services/news.service'], function(exports_1, context_1) {
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
    var core_1, news_service_1;
    var NewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            }],
        execute: function() {
            NewsComponent = (function () {
                function NewsComponent(_news) {
                    this._news = _news;
                    this._newsList = [];
                }
                NewsComponent.prototype.ngOnInit = function () {
                    this.getNews();
                };
                NewsComponent.prototype.getNews = function () {
                    this._news.getShortList().then(function (data) {
                        this._newsList = data;
                    }.bind(this));
                };
                NewsComponent.prototype.getFormatedDate = function (date) {
                    var dd = date.getDate();
                    var mm = date.getMonth() + 1; //January is 0!
                    var yyyy = date.getFullYear();
                    return (dd < 10 ? '0' + dd.toString() : dd.toString()) + '.' + (mm < 10 ? '0' + mm.toString() : mm.toString()) + '.' + yyyy;
                };
                NewsComponent = __decorate([
                    core_1.Component({
                        selector: 'news-component',
                        templateUrl: '../app/templates/news.component.html'
                    }), 
                    __metadata('design:paramtypes', [news_service_1.NewsService])
                ], NewsComponent);
                return NewsComponent;
            }());
            exports_1("NewsComponent", NewsComponent);
        }
    }
});
//# sourceMappingURL=news.component.js.map