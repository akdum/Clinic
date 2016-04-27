System.register(['angular2/core', 'angular2/router', '../../../services/utilities.service', '../../../services/news.service', '../../common/common.title.component', '../../common/common.back.component', '../../common/common.text.component'], function(exports_1, context_1) {
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
    var core_1, router_1, utilities_service_1, news_service_1, common_title_component_1, common_back_component_1, common_text_component_1;
    var NewsPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (common_title_component_1_1) {
                common_title_component_1 = common_title_component_1_1;
            },
            function (common_back_component_1_1) {
                common_back_component_1 = common_back_component_1_1;
            },
            function (common_text_component_1_1) {
                common_text_component_1 = common_text_component_1_1;
            }],
        execute: function() {
            NewsPageComponent = (function () {
                function NewsPageComponent(_routeParams, _utilities, _newsService) {
                    this._routeParams = _routeParams;
                    this._utilities = _utilities;
                    this._newsService = _newsService;
                    this._backRouteName = "MainPage";
                    this._backTitle = "Вернуться";
                    this._news = this._utilities.getBlankNews();
                }
                NewsPageComponent.prototype.ngOnInit = function () {
                    var newsId = this._routeParams.get('id');
                    if (newsId) {
                        this._newsService.getNewsById(parseInt(newsId)).then(function (data) {
                            if (data) {
                                this._news = data;
                            }
                        }.bind(this));
                    }
                };
                NewsPageComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/templates/news.page.component.html',
                        directives: [common_title_component_1.CommonTitleComponent,
                            common_back_component_1.CommonBackComponent,
                            common_text_component_1.CommonTextComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, utilities_service_1.UtilitiesService, news_service_1.NewsService])
                ], NewsPageComponent);
                return NewsPageComponent;
            }());
            exports_1("NewsPageComponent", NewsPageComponent);
        }
    }
});
//# sourceMappingURL=news.page.component.js.map