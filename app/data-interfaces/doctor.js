System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Doctor;
    return {
        setters:[],
        execute: function() {
            Doctor = (function () {
                function Doctor(name, therapy, url, photoName, text) {
                    this.name = name;
                    this.therapy = therapy;
                    this.url = url;
                    this.photoName = photoName;
                    this.text = text;
                }
                return Doctor;
            }());
            exports_1("Doctor", Doctor);
        }
    }
});
//# sourceMappingURL=doctor.js.map