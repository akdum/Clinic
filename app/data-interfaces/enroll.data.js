System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnrollData;
    return {
        setters:[],
        execute: function() {
            EnrollData = (function () {
                function EnrollData(name, phone, reason) {
                    this.name = name;
                    this.phone = phone;
                    this.reason = reason;
                }
                return EnrollData;
            }());
            exports_1("EnrollData", EnrollData);
        }
    }
});
//# sourceMappingURL=enroll.data.js.map