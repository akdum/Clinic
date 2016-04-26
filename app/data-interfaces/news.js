System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var News;
    return {
        setters:[],
        execute: function() {
            News = (function () {
                function News(title, text, rawdate, id) {
                    this.title = title;
                    this.text = text;
                    this.rawdate = rawdate;
                    this.id = id;
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