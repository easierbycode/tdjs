desc('Example!');
task("example", ["dependency"], function() {
    console.log('Example!');
});

task("dependency", function() {
    console.log('Dependency!');
})