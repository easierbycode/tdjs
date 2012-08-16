/*global desc, task, jake, fail, complete */

"use strict";

desc("Build and test");

task('default', ['lint']);

desc('lint everything');
task('lint', [], function() {
    var lint = require("./build/lint/lint_runner.js");

    var files = new jake.FileList();
    files.include("**/*.js");
    files.exclude("node_modules");
    files.exclude("build");

    var options = {
        bitwise: true,
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        strict: true,
        trailing: true,
        node: true
    };

    lint.validateFileList(files.toArray(), options, {});
});

desc("Integrate");
task("integrate", ["default"], function() {
    console.log("Integration logic goes here");
});

desc('Example!');
task("example", ["dependency"], function() {
    console.log('Example!');
});

task("dependency", function() {
    console.log('Dependency!');
});