var ranjanievent = require ('events');
var ranjanieventemitter = new ranjanievent.EventEmitter();
ranjanieventemitter.once('knock',
function(){
    console.log('who is there?');
}
)

ranjanieventemitter.on('knock',
    function sayGo(){
        console.log('go away!');
    }
)
ranjanieventemitter.emit('knock');

ranjanieventemitter.emit('knock');

ranjanieventemitter.emit('knock');