System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var News;
    return {
        setters:[],
        execute: function() {
            News = (function () {
                function News(title, body, rawdate) {
                    this.title = title;
                    this.body = body;
                    this.rawdate = rawdate;
                    this.date = new Date(1970, 0, 1);
                    this.date.setTime(rawdate);
                }
                return News;
            }());
            exports_1("News", News);
        }
    }
});
//# sourceMappingURL=news.js.map