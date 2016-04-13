System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service;
    return {
        setters:[],
        execute: function() {
            Service = (function () {
                function Service(title, body, imageBase64, group, isPopular) {
                    this.title = title;
                    this.body = body;
                    this.imageBase64 = imageBase64;
                    this.group = group;
                    this.isPopular = isPopular;
                }
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map