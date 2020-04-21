var http = require('http');
// var dt = require('./nodeModule');

// Server-Objekt erstellen
http.createServer(function (req, res) {

    // StatusCode 200 = Alles OK
    // der Rest ist Response-Header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // res.write("Das aktuelle Datum: " + dt.getDateTime());
    
    // Eine Antwort an den Client
    res.write('<h1>Hello World</h1>');
    
    // Parameter der URL    
    res.write(req.url);

    res.end(); // Ende der Response

}).listen(8080); 

console.log("Server läuft: http://localhost:8080");