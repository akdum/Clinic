System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServicesGroup;
    return {
        setters:[],
        execute: function() {
            ServicesGroup = (function () {
                function ServicesGroup(title, body, imageBase64, url, text) {
                    this.title = title;
                    this.body = body;
                    this.imageBase64 = imageBase64;
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