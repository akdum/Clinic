System.register(['@angular/core', '../config/config', '../data-interfaces/news', '../data-interfaces/service', '../data-interfaces/contacts', '../data-interfaces/services.group', '../data-interfaces/doctor', '../data-interfaces/about', './utilities.service', './aws.service'], function(exports_1, context_1) {
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
    var core_1, config_1, news_1, service_1, contacts_1, services_group_1, doctor_1, about_1, utilities_service_1, aws_service_1;
    var DbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (news_1_1) {
                news_1 = news_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (contacts_1_1) {
                contacts_1 = contacts_1_1;
            },
            function (services_group_1_1) {
                services_group_1 = services_group_1_1;
            },
            function (doctor_1_1) {
                doctor_1 = doctor_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            },
            function (aws_service_1_1) {
                aws_service_1 = aws_service_1_1;
            }],
        execute: function() {
            DbService = (function () {
                function DbService(_utilities, _aws) {
                    this._utilities = _utilities;
                    this._aws = _aws;
                    this._dynamoDB = _aws.Db;
                }
                ;
                DbService.prototype.getNews = function () {
                    var _this = this;
                    var params = {
                        "TableName": "News",
                        "AttributesToGet": ["Title", "Date", "Id"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            var returnItems = [];
                            if (data.Count > 0) {
                                for (var index = 0; index < data.Count; index++) {
                                    returnItems.push(new news_1.News(_this._utilities.getStringFromField(data.Items[index].Title), [], _this._utilities.getNumberFromField(data.Items[index].Date), _this._utilities.getNumberFromField(data.Items[index].Id)));
                                }
                                returnItems.sort(function (a, b) {
                                    if (a.rawdate < b.rawdate)
                                        return 1;
                                    if (a.rawdate > b.rawdate)
                                        return -1;
                                    return 0;
                                });
                            }
                            resolve(returnItems);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getNewsDetailsByIdAndTitle = function (title, id) {
                    var _this = this;
                    var params = {
                        "TableName": "News",
                        "KeyConditionExpression": "Title = :title",
                        "FilterExpression": "Id = :id",
                        "ExpressionAttributeValues": {
                            ":title": {
                                S: title
                            },
                            ":id": {
                                N: id
                            }
                        }
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.query(params, function (err, data) {
                        if (err == null) {
                            var returnData = _this._utilities.getBlankNews();
                            if (data.Count > 0) {
                                returnData = new news_1.News(_this._utilities.getStringFromField(data.Items[0].Title), _this._utilities.getListTextFromField(data.Items[0].Text), _this._utilities.getNumberFromField(data.Items[0].Date), _this._utilities.getNumberFromField(data.Items[0].Id));
                            }
                            resolve(returnData);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getServices = function () {
                    var _this = this;
                    var params = {
                        "TableName": "Services",
                        "AttributesToGet": ["Title", "Body", "IconName", "Group", "IsPopular", "Url", "ShowOnMainPage"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            var returnItems = [];
                            if (data.Count > 0) {
                                for (var index = 0; index < data.Count; index++) {
                                    returnItems.push(new service_1.Service(_this._utilities.getStringFromField(data.Items[index].Title), _this._utilities.getStringFromField(data.Items[index].Body), config_1.CONFIG.DB.BUCKETS.ICONS_URL + _this._utilities.getStringFromField(data.Items[index].IconName), _this._utilities.getStringFromField(data.Items[index].Group), _this._utilities.getBooleanFromField(data.Items[index].ShowOnMainPage), _this._utilities.getBooleanFromField(data.Items[index].IsPopular), _this._utilities.getStringFromField(data.Items[index].Url), [], []));
                                }
                            }
                            resolve(returnItems);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getServiceDetailsByName = function (name) {
                    var _this = this;
                    var params = {
                        "TableName": "Services",
                        "KeyConditionExpression": "Title = :title",
                        "ExpressionAttributeValues": {
                            ":title": {
                                S: name
                            }
                        }
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.query(params, function (err, data) {
                        if (err == null) {
                            var returnData = void 0;
                            if (data.Count > 0) {
                                returnData = new service_1.Service(_this._utilities.getStringFromField(data.Items[0].Title), _this._utilities.getStringFromField(data.Items[0].Body), config_1.CONFIG.DB.BUCKETS.ICONS_URL + _this._utilities.getStringFromField(data.Items[0].IconName), _this._utilities.getStringFromField(data.Items[0].Group), _this._utilities.getBooleanFromField(data.Items[0].ShowOnMainPage), _this._utilities.getBooleanFromField(data.Items[0].IsPopular), _this._utilities.getStringFromField(data.Items[0].Url), _this._utilities.getListTextFromField(data.Items[0].Text), _this._utilities.getPricesFromField(data.Items[0].Prices));
                            }
                            resolve(returnData);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getServiceGroups = function () {
                    var _this = this;
                    var params = {
                        "TableName": "ServiceGroups",
                        "AttributesToGet": ["Title", "Body", "IconName", "Url"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            var returnItems = [];
                            if (data.Count > 0) {
                                for (var index = 0; index < data.Count; index++) {
                                    returnItems.push(new services_group_1.ServicesGroup(_this._utilities.getStringFromField(data.Items[index].Title), _this._utilities.getStringFromField(data.Items[index].Body), config_1.CONFIG.DB.BUCKETS.ICONS_URL + _this._utilities.getStringFromField(data.Items[index].IconName), _this._utilities.getStringFromField(data.Items[index].Url), []));
                                }
                            }
                            resolve(returnItems);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getServicesGroupDetailsByName = function (name) {
                    var _this = this;
                    var params = {
                        "TableName": "ServiceGroups",
                        "KeyConditionExpression": "Title = :title",
                        "ExpressionAttributeValues": {
                            ":title": {
                                S: name
                            }
                        }
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.query(params, function (err, data) {
                        if (err == null) {
                            var returnData = void 0;
                            if (data.Count > 0) {
                                returnData = new services_group_1.ServicesGroup(_this._utilities.getStringFromField(data.Items[0].Title), _this._utilities.getStringFromField(data.Items[0].Body), config_1.CONFIG.DB.BUCKETS.ICONS_URL + _this._utilities.getStringFromField(data.Items[0].IconName), _this._utilities.getStringFromField(data.Items[0].Url), _this._utilities.getListTextFromField(data.Items[0].Text));
                            }
                            resolve(returnData);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getContacts = function () {
                    var _this = this;
                    var params = {
                        "TableName": "Contacts",
                        "AttributesToGet": ["CityPhone", "Address", "MobilePhone", "VkGroupAddress", "Location", "Baloon", "WorkHours"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            if (data.Count > 0) {
                                resolve(new contacts_1.Contacts(_this._utilities.getStringFromField(data.Items[0].CityPhone), _this._utilities.getStringFromField(data.Items[0].MobilePhone), [parseFloat(data.Items[0].Location.L[0].N), parseFloat(data.Items[0].Location.L[1].N)], [parseFloat(data.Items[0].Baloon.L[0].N), parseFloat(data.Items[0].Baloon.L[1].N)], _this._utilities.getStringFromField(data.Items[0].VkGroupAddress), _this._utilities.getStringFromField(data.Items[0].Address), _this._utilities.getStringFromField(data.Items[0].WorkHours)));
                            }
                            else
                                resolve(_this._utilities.getBlankContacts());
                        }
                        else {
                            reject(err);
                        }
                    }); });
                };
                DbService.prototype.getSpecialOffers = function () {
                    var _this = this;
                    var params = {
                        "TableName": "Special-offers",
                        "KeyConditionExpression": "Title = :title and StartDate <= :date",
                        "FilterExpression": "EndDate >= :date",
                        "ExpressionAttributeValues": {
                            ":title": {
                                S: "Специальное предложение"
                            },
                            ":date": {
                                N: (new Date()).getTime().toString()
                            }
                        }
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.query(params, function (err, data) {
                        if (err == null) {
                            var returnData = [];
                            if (data.Count > 0) {
                                for (var index = 0; index < data.Count; index++) {
                                    returnData.push(_this._utilities.getStringFromField(data.Items[index].ImageBase64));
                                }
                            }
                            resolve(returnData);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getDoctors = function () {
                    var _this = this;
                    var params = {
                        "TableName": "Doctors",
                        "AttributesToGet": ["Name", "PhotoName", "Therapy", "Url"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            var returnItems = [];
                            if (data.Count > 0) {
                                for (var index = 0; index < data.Count; index++) {
                                    returnItems.push(new doctor_1.Doctor(_this._utilities.getStringFromField(data.Items[index].Name), _this._utilities.getStringFromField(data.Items[index].Therapy), _this._utilities.getStringFromField(data.Items[index].Url), _this._utilities.getStringFromField(data.Items[index].PhotoName), []));
                                }
                            }
                            resolve(returnItems);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService.prototype.getAbout = function () {
                    var _this = this;
                    var params = {
                        "TableName": "About",
                        "AttributesToGet": ["Comments", "Rights", "Law", "PhotoGallery"]
                    };
                    return new Promise(function (resolve, reject) { return _this._dynamoDB.scan(params, function (err, data) {
                        if (err == null) {
                            var about = _this._utilities.getBlankAbout();
                            if (data.Count > 0) {
                                about = new about_1.About(_this._utilities.getListCommentsFromField(data.Items[0].Comments), _this._utilities.getListTextFromField(data.Items[0].Rights), _this._utilities.getStringFromField(data.Items[0].Law), _this._utilities.getListStringsFromField(data.Items[0].PhotoGallery));
                            }
                            resolve(about);
                        }
                        else {
                            console.log(err);
                        }
                    }); });
                };
                DbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [utilities_service_1.UtilitiesService, aws_service_1.AwsService])
                ], DbService);
                return DbService;
            }());
            exports_1("DbService", DbService);
        }
    }
});
//# sourceMappingURL=db.service.js.map