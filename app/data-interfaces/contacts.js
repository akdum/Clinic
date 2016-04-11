System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Contacts;
    return {
        setters:[],
        execute: function() {
            Contacts = (function () {
                function Contacts(cityPhone, mobilePhone, location, vkGroupAddress) {
                    this.cityPhone = cityPhone;
                    this.mobilePhone = mobilePhone;
                    this.location = location;
                    this.vkGroupAddress = vkGroupAddress;
                }
                return Contacts;
            }());
            exports_1("Contacts", Contacts);
        }
    }
});
//# sourceMappingURL=contacts.js.map