let net = require('net');

// let client = net.connect({ port: 8081 }, function () {
// let client = net.createConnection({ port: 8081 }, function () {
let client = net.createConnection(8081, "localhost", function () {
    console.log('connected to server!');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('disconnected from server');
});