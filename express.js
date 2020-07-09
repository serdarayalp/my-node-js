/*
Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. 
Following are some of the core features of Express framework:

    Allows to set up middlewares to respond to HTTP Requests.
    Defines a routing table which is used to perform different actions based on HTTP Method and URL.
    Allows to dynamically render HTML Pages based on passing arguments to templates.


Installing Express

Firstly, install the Express framework globally using NPM so that it can be used to create a web 
application using node terminal.

$ npm install express -g

You should install the following important modules along with express:

    body-parser: This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
    cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    multer: This is a node.js middleware for handling multipart/form-data.

        $ npm install body-parser -g
        $ npm install cookie-parser -g
        $ npm install multer -g



*/


let express = require('express');

let app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
    console.log("Example app listening on port 8081")
})