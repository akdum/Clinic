System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var About;
    return {
        setters:[],
        execute: function() {
            About = (function () {
                function About(comments, rights, law, photoGallery) {
                    this.comments = comments;
                    this.rights = rights;
                    this.law = law;
                    this.photoGallery = photoGallery;
                }
                return About;
            }());
            exports_1("About", About);
        }
    }
});
//# sourceMappingURL=about.js.map