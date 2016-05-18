System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service;
    return {
        setters:[],
        execute: function() {
            Service = (function () {
                function Service(title, body, iconUrl, group, showOnMainPage, isPopular, url, text, prices) {
                    this.title = title;
                    this.body = body;
                    this.iconUrl = iconUrl;
                    this.group = group;
                    this.showOnMainPage = showOnMainPage;
                    this.isPopular = isPopular;
                    this.url = url;
                    this.text = text;
                    this.prices = prices;
                }
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});
//# sourceMappingURL=service.js.map