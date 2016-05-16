System.register(['@angular/platform-browser-dynamic', '@angular/router-deprecated', './components/app.component', './services/assets.service', './services/contacts.service', './services/services.service', './services/special.offers.service', './services/news.service', './services/db.service', './services/utilities.service', './services/doctors.service', './services/about.service', './services/aws.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_deprecated_1, app_component_1, assets_service_1, contacts_service_1, services_service_1, special_offers_service_1, news_service_1, db_service_1, utilities_service_1, doctors_service_1, about_service_1, aws_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (assets_service_1_1) {
                assets_service_1 = assets_service_1_1;
            },
            function (contacts_service_1_1) {
                contacts_service_1 = contacts_service_1_1;
            },
            function (services_service_1_1) {
                services_service_1 = services_service_1_1;
            },
            function (special_offers_service_1_1) {
                special_offers_service_1 = special_offers_service_1_1;
            },
            function (news_service_1_1) {
                news_service_1 = news_service_1_1;
            },
            function (db_service_1_1) {
                db_service_1 = db_service_1_1;
            },
            function (utilities_service_1_1) {
                utilities_service_1 = utilities_service_1_1;
            },
            function (doctors_service_1_1) {
                doctors_service_1 = doctors_service_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            },
            function (aws_service_1_1) {
                aws_service_1 = aws_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [aws_service_1.AwsService,
                assets_service_1.AssetsService,
                contacts_service_1.ContactsService,
                services_service_1.ServicesService,
                special_offers_service_1.SpecialOffersService,
                news_service_1.NewsService,
                db_service_1.DbService,
                doctors_service_1.DoctorsService,
                utilities_service_1.UtilitiesService,
                router_deprecated_1.ROUTER_PROVIDERS,
                about_service_1.AboutService]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map