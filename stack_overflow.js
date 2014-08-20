
function stack (arg) {
    console.log(arg);
    stack('lolz');
};

// good code practices
process.on('uncaughtException', function (e) {
    console.log(e);
});

stack('this\'ll be a good1');
