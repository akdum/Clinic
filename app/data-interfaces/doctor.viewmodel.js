System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DoctorViewModel;
    return {
        setters:[],
        execute: function() {
            DoctorViewModel = (function () {
                function DoctorViewModel(name, therapy, url, photoUrl, text) {
                    this.name = name;
                    this.therapy = therapy;
                    this.url = url;
                    this.photoUrl = photoUrl;
                    this.text = text;
                }
                return DoctorViewModel;
            }());
            exports_1("DoctorViewModel", DoctorViewModel);
        }
    }
});
//# sourceMappingURL=doctor.viewmodel.js.map