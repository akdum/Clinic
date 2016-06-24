"use strict";
var gulp = require("gulp");  
var del = require("del");  
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {  
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "app", "css", "js"], function () {  
    console.log("Building resources...");
});
/* copy the app core files to the build folder */
gulp.task("app", ['index'], function(){  
    return gulp.src(["app/**", "!app/**/*.ts"])
        .pipe(gulp.dest("build/app"));
});
/* get the index file to the root of the build */
gulp.task("index", function(){  
    return gulp.src(["index.html"])
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {  
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("css", function(){  
    return gulp.src(["./css/styles.css",
                     "./css/tether.min.css",
                     "./css/tether-theme-arrows-dark.min.css",
                     "./css/tether-theme-arrows.min.css",
                     "./css/tether-theme-basic.min.css"])
        .pipe(gulp.dest("build/css"));
});
gulp.task("js", function(){  
    return gulp.src(["./js/angular2-polyfills.js","./js/tether.min.js"])
        .pipe(gulp.dest("build/js"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {  
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'angular2/bundles/angular2-polyfills.js',
        'angular2/es6/dev/src/testing/shims_for_IE.js',
        'systemjs/dist/system.js',
        'typescript/lib/typescript.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.js',
        'aws-sdk/dist/aws-sdk.min.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {  
    console.log("Building the project ...");
});