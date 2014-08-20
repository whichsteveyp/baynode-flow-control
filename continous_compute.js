
var http = require('http');

// lets briefly touch on this
// process.maxTickDepth = 5;

console.log(process.maxTickDepth);

function compute() {
    console.log('doing some computes');

    // recursion blocks the process from responding to incoming requests
    // also, stack overflow
    compute();

    // probably some heathens do this
    // setTimeout(compute, 1000);

    // performs complicated calculations continuously
    // process.nextTick(compute);

    // another thing, we'll maybe talk about this later
    // setImmediate(compute);
}

http.createServer(function(req, res) {
    console.log('------------------------------------ doing some response');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(5000, '127.0.0.1');

console.log('Very likely listening on port 5000');

compute();
