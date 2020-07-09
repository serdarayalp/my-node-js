let net = require('net');

console.log(net.isIP("127.0.0.1"));
console.log(net.isIPv4("127.0.0.1"));

console.log(net.isIP("2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b"));
console.log(net.isIPv6("2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b"));

