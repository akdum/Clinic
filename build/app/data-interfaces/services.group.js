System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServicesGroup;
    return {
        setters:[],
        execute: function() {
            ServicesGroup = (function () {
                function ServicesGroup(title, body, imageUrl, url, text) {
                    this.title = title;
                    this.body = body;
                    this.imageUrl = imageUrl;
                    this.url = url;
                    this.text = text;
                }
                return ServicesGroup;
            }());
            exports_1("ServicesGroup", ServicesGroup);
        }
    }
});
//# sourceMappingURL=services.group.js.map