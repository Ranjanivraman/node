debugger;
var events= require ('events');
var util = require ('util');

console.log('ranjani');

var Job = function Job() {
    var job = this

    job.process = function () {
        setTimeout(
            function () {
                job.emit('done', {completedOn: new Date()})
            }, 700
        )
    }
    job.on('start',function(){
        job.process();
    })
}
util.inherits(Job, events.EventEmitter)
module.exports = Job;