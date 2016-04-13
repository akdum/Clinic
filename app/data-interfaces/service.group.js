System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServiceGroup;
    return {
        setters:[],
        execute: function() {
            ServiceGroup = (function () {
                function ServiceGroup(title, description, imageBase64) {
                    this.title = title;
                    this.description = description;
                    this.imageBase64 = imageBase64;
                }
                return ServiceGroup;
            }());
            exports_1("ServiceGroup", ServiceGroup);
        }
    }
});
//# sourceMappingURL=service.group.js.map