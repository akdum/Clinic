System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TextViewModel;
    return {
        setters:[],
        execute: function() {
            TextViewModel = (function () {
                function TextViewModel(heading, value, isExpanded, imageUrls) {
                    this.heading = heading;
                    this.value = value;
                    this.isExpanded = isExpanded;
                    this.imageUrls = imageUrls;
                }
                return TextViewModel;
            }());
            exports_1("TextViewModel", TextViewModel);
        }
    }
});
//# sourceMappingURL=text.viewmodel.js.map