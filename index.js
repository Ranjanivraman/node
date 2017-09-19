var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('Hello World!');
    res.end('everything is groovy');
    setTimeout(function() {
        throw new Error("This will crash your node process");
    }, 1000);
}).listen(8080);

process.on('uncaughtException', function(err) {
    //log the error
    console.error(err);
    require('forky').disconnect();
    //continue on as if nothing has happend...
    //but something HAS happened.  What if the error wasn't in a timeout?
    //what if our error came from somewhere deep down and left some dangling
    //uncloses sockets or connections to database or open files?  We could be leaking
    //resources slowly and not even know it. oh no!
});