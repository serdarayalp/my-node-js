/*
Streams:
    Readable − Stream which is used for read operation.
    Writable − Stream which is used for write operation.
    Duplex − Stream which can be used for both read and write operation.
    Transform − A type of duplex stream where the output is computed based on input.
*/

/*
Each type of Stream is an EventEmitter instance and throws several events at
different instance of times. Some of the commonly used events are:
    data − This event is fired when there is data is available to read.
    end − This event is fired when there is no more data to read.
    error − This event is fired when there is any error receiving or writing data.
    finish − This event is fired when all the data has been flushed to underlying system.
*/

let fs = require("fs");
let zlib = require('zlib');

let data = '';

// Create a readable stream
let readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");




let data2 = 'Simply Easy Learning';

// Create a writable stream
let writerStream = fs.createWriteStream('output.txt');

// Write the data2 to stream with encoding to be utf8
writerStream.write(data2, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function () {
    console.log("Write completed.");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");




// Piping
// Create a readable stream
let readerStream2 = fs.createReadStream('input.txt');
// Create a writable stream
let writerStream2 = fs.createWriteStream('output.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream2.pipe(writerStream2);

console.log("Program Ended - Piping");




// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

// Decompress the file input.txt.gz to input.txt
/*
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("File Decompressed.");
*/