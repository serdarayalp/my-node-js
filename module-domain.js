/********************************************
 * @DEPRECATED
 ********************************************/

/*
Node.js domain module is used to intercept unhandled error. These unhandled error can be intercepted using 
internal binding or external binding. If errors are not handled at all, then they will simply crash the 
Node application.

    * Internal Binding − Error emitter is executing its code within the run method of a domain.
    * External Binding − Error emitter is added explicitly to a domain using its add method.

    var domain = require("domain");
*/

var domain = require("domain");

var EventEmitter = require("events").EventEmitter;
var emitter1 = new EventEmitter();

// Create a domain
var domain1 = domain.create();

domain1.on('error', function (err) {
    console.log("domain1 handled this error (" + err.message + ")");
});

/* 
Explicit binding : External Binding. Error emitter is added explicitly to a 
    domain using its add method.
*/
domain1.add(emitter1);

emitter1.on('error', function (err) {
    console.log("listener handled this error (" + err.message + ")");
});

emitter1.emit('error', new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('To be handled by domain1'));




var domain2 = domain.create();

domain2.on('error', function (err) {
    console.log("domain2 handled this error (" + err.message + ")");
});

/* Implicit binding : Internal Binding − Error emitter is executing its code within 
    the run method of a domain.
*/
domain2.run(function () {
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('To be handled by domain2'));
});



domain1.remove(emitter1);
// emitter1.emit('error', new Error('Converted to exception. System will crash!'));
