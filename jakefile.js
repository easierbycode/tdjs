task('default', ['lint']);

desc('lint everything');
task('lint', [], function() {
    var lint = require('./build/lint/lint_runner.js');
    lint.validateFile('jakefile.js', {}, {});
});

desc('Example!');
task("example", ["dependency"], function() {
    console.log('Example!');
});

task("dependency", function() {
    console.log('Dependency!');
});