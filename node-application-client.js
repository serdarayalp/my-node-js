let fs = require("fs");

/*
// Blocking Code
let data = fs.readFileSync('input.txt');
console.log(data.toString());
*/

// Non-Blocking Code with Callback
fs.readFile('input.txt', function (err, data) {
    if (err) { 
        return console.error(err); 
    }
    console.log(data.toString());
});


console.log("Program Ended");