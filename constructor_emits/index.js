
var Async = require('./async');
var Sync  = require('./sync');

var a = new Async({});

a.on('data', function(data) {
    console.log(data);
});

a.on('end', function(data) {
    console.log('async end');
});

var s = new Sync({});

s.on('data', function(data) {
    console.log(data);
});

a.on('end', function(data) {
    console.log('sync end');
});
