
var http = require('http');
var fs   = require('fs');
var path = require('path');

// lets briefly touch on this
process.maxTickDepth = 5;

console.log(process.maxTickDepth);

var lots_of_files = ['continous_compute.js'];

function compute() {
    // do some stuff
    var results = fs.readFileSync(path.join(__dirname, lots_of_files[0]));
    console.log('computed a chunk of big stuff, sync-like, results: ' + results.length);

    // recursion blocks the process from responding to incoming requests
    // also, stack overflow
    compute();

    // probably some heathens do this
    // setTimeout(compute, 1000);

    // performs complicated calculations continuously
    // but it's going to break, eventually (see maxTickDepth, setImmediate)
    // process.nextTick(compute);

    // this thing...we'll maybe talk about this later
    // setImmediate(compute);
}

// test with:
// ab -n 10000 -c 10 http://127.0.0.1:5000/
http.createServer(function(req, res) {
    console.log('------------------------------------ doing some response');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(5000, '127.0.0.1');

console.log('Very likely listening on port 5000');

compute();
