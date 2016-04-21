System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service;
    return {
        setters:[],
        execute: function() {
            Service = (function () {
                function Service(title, body, iconUrl, group, isPopular, url, text) {
                    this.title = title;
                    this.body = body;
                    this.iconUrl = iconUrl;
                    this.group = group;
                    this.isPopular = isPopular;
                    this.url = url;
                    this.text = text;
                }
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map