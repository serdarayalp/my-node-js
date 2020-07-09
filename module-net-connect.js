const net = require('net');
const port = 8081;
const host = 'localhost';
const client = new net.Socket();

// Send a connection request to the server.
client.connect({ port: port, host: host }, function () {
    // If there is no error, the server has accepted the request and created a new socket dedicated to us.
    console.log('TCP connection established with the server.');

    // The client can now send data to the server by writing to its socket.
    client.write('Hello from Client...');
});

// The client can also receive data from the server by reading from its socket.
client.on('data', function (data) {

    console.log("Data received from the server: " + data.toString());
    // console.log(`Data received from the server: ${data.toString()}.`);

    // Request an end to the connection after the data has been received.
    client.end();
});

client.on('end', function () {
    console.log('Requested an end to the TCP connection');
});