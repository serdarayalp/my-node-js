/*
What is REST architecture?
---------------------------
REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. 
It revolves around resource where every component is a resource and a resource is accessed by a common interface 
using HTTP standard methods. REST was first introduced by Roy Fielding in 2000.

A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. 
Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, 
JSON, XML but JSON is the most popular one.


HTTP methods
-------------
Following four HTTP methods are commonly used in REST based architecture.

    GET − This is used to provide a read only access to a resource.
    PUT − This is used to create a new resource.
    DELETE − This is used to remove a resource.
    POST − This is used to update a existing resource or create a new resource.


RESTful Web Services
---------------------
A web service is a collection of open protocols and standards used for exchanging data between applications or 
systems. Software applications written in various programming languages and running on various platforms can use 
web services to exchange data over computer networks like the Internet in a manner similar to inter-process 
communication on a single computer. This interoperability (e.g., communication between Java and Python, or Windows 
and Linux applications) is due to the use of open standards.

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to 
implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a 
service, which provides resource representation such as JSON and set of HTTP Methods.


*/



var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        // console.log(data);
        res.end(data);
    });
});


var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {

        // convert JSON-String to JSON-Object
        data = JSON.parse(data);

        data["user4"] = user["user4"];
        // console.log(data);

        // convert JSON-Object to JSON-String
        res.end(JSON.stringify(data));
    });
});


app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id]
        // console.log(user);
        res.end(JSON.stringify(user));
    });
});



var id = 2;

app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        
        delete data["user" + 2];

        // console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8081, function () {
    console.log('Server running at http://127.0.0.1:8081/');
})
