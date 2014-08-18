
var fs = require('fs');

function maybeSync(arg, cb) {
    if (arg) return cb();

    fs.stat('index.js', cb);
};

function defSync(arg, cb) {
    if (arg) {
        return process.nextTick(cb);
    }

    fs.stat('index.js', cb);
};

function logejs() {
    console.log('loge ' + arguments);
};

function bar() {
    console.log('deloge: bar');
};


// bar first, then I/O loge
// maybeSync(false, logejs);
// bar();

// I/O loge first, then bar
// maybeSync(true, logejs);
// bar();

// bar first, then I/O loge
// defSync(false, logejs);
// bar();

// I/O loge first, then bar
// defSync(true, logejs);
// bar();
