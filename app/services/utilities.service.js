System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UtilitiesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UtilitiesService = (function () {
                function UtilitiesService() {
                }
                UtilitiesService.prototype.prepareRows = function (list, rows) {
                    var count = Math.floor(list.length / 3);
                    var reminder = list.length % 3;
                    if (count && count > 0) {
                        for (var index = 0; index < count; index++) {
                            var row = [];
                            for (var j = 0; j < 3; j++) {
                                row.push(list[index * 3 + j]);
                            }
                            rows.push(row);
                        }
                    }
                    if (reminder && reminder > 0) {
                        var row = [];
                        for (var index = reminder - 1; index >= 0; index--) {
                            row.push(list[list.length - index]);
                        }
                        rows.push(row);
                    }
                    return rows;
                };
                UtilitiesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UtilitiesService);
                return UtilitiesService;
            }());
            exports_1("UtilitiesService", UtilitiesService);
        }
    }
});
//# sourceMappingURL=utilities.service.js.map