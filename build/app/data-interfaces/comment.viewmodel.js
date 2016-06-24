System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CommentViewModel;
    return {
        setters:[],
        execute: function() {
            CommentViewModel = (function () {
                function CommentViewModel(theme, short, extended, isExpanded) {
                    this.theme = theme;
                    this.short = short;
                    this.extended = extended;
                    this.isExpanded = isExpanded;
                }
                return CommentViewModel;
            }());
            exports_1("CommentViewModel", CommentViewModel);
        }
    }
});
//# sourceMappingURL=comment.viewmodel.js.map