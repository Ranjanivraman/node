http = require('http');

var server = http.createServer(function (req,res){
   req.setEncoding('utf8');
    req.on('data',function(){
            res.write = 'ranjani';
    })
})

server.listen(1337);