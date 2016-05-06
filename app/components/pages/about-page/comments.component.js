System.register(['@angular/core', '../../../data-interfaces/comment.viewmodel'], function(exports_1, context_1) {
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
    var core_1, comment_viewmodel_1;
    var CommentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_viewmodel_1_1) {
                comment_viewmodel_1 = comment_viewmodel_1_1;
            }],
        execute: function() {
            CommentsComponent = (function () {
                function CommentsComponent() {
                    this._comments = [];
                }
                Object.defineProperty(CommentsComponent.prototype, "comments", {
                    set: function (comments) {
                        if (comments && comments.length > 0) {
                            this._comments = comments.map(function (val) { return new comment_viewmodel_1.CommentViewModel(val.theme, val.short, val.extended, false); });
                            this._comments.forEach(function (val) {
                                if (val.extended == '-') {
                                    val.isExpanded = true;
                                    val.extended = "";
                                }
                            });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                CommentsComponent.prototype.toggle = function (comment) {
                    comment.isExpanded = !comment.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array), 
                    __metadata('design:paramtypes', [Array])
                ], CommentsComponent.prototype, "comments", null);
                CommentsComponent = __decorate([
                    core_1.Component({
                        selector: 'comments-component',
                        templateUrl: '../app/templates/comments.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentsComponent);
                return CommentsComponent;
            }());
            exports_1("CommentsComponent", CommentsComponent);
        }
    }
});
//# sourceMappingURL=comments.component.js.map