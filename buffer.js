/**************************************
 **************************************
 **************************************
Buffer() is deprecated due to security and usability issues. Please use the 
    Buffer.alloc(), 
    Buffer.allocUnsafe(), or 
    Buffer.from() 
methods instead.
 **************************************
 ************************************** 
*/

/* 
Buffer class is a global class that can be accessed in an application 
without importing the buffer module.
*/

let buf1 = new Buffer.alloc(10);
let buf2 = new Buffer.from([10, 20, 30, 40, 50]);

/*
Though "utf8" is the default encoding, you can use any of the following 
encodings "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".
*/
let buf3 = new Buffer.from("Simply Easy Learning", "utf-8");


/*
Writing to Buffers: 

buf.write(string[, offset][, length][, encoding])

    string − This is the string data to be written to buffer.
    offset − This is the index of the buffer to start writing at. Default value is 0.
    length − This is the number of bytes to write. Defaults to buffer.length.
    encoding − Encoding to use. 'utf8' is the default encoding.

*/

let buf4 = new Buffer.alloc(256);
let len = buf4.write("Simply Easy Learning");
console.log("Octets written : " + len);

/*
Reading from Buffers:

buf.toString([encoding][, start][, end])

    encoding − Encoding to use. 'utf8' is the default encoding.
    start − Beginning index to start reading, defaults to 0.
    end − End index to end reading, defaults is complete buffer.
*/

let buf5 = new Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf5[i] = i + 97;
}

console.log(buf5.toString('ascii'));            // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf5.toString('ascii', 0, 5));      // outputs: abcde
console.log(buf5.toString('utf8', 0, 5));       // outputs: abcde
console.log(buf5.toString(undefined, 0, 5));    // encoding defaults to 'utf8', outputs abcde


let buf6 = new Buffer.from('Simply Easy Learning');
let json = buf6.toJSON(buf6);
console.log(json);


let buf7 = new Buffer.from('TutorialsPoint ');
let buf8 = new Buffer.from('Simply Easy Learning');
let buf9 = Buffer.concat([buf7, buf8]);

console.log("buffer3 content: " + buf9.toString());


let buf10 = new Buffer.from('ABC');
let buf11 = new Buffer.from('ABCD');
let result = buf10.compare(buf11);

if (result < 0) {
    console.log(buf10 + " comes before " + buf11);
} else if (result === 0) {
    console.log(buf10 + " is same as " + buf11);
} else {
    console.log(buf10 + " comes after " + buf11);
}


let buf12 = new Buffer.from('ABC');
let buf13 = new Buffer.alloc(3);
buf12.copy(buf13);
console.log("buf13 content: " + buf13.toString());


let buf14 = new Buffer.from('TutorialsPoint');
let buf15 = buf14.slice(0, 9);
console.log("buf15 content: " + buf15.toString());


let buf16 = new Buffer.from('TutorialsPoint');
console.log("buf16 length: " + buf16.length);


/*
1: Buffer.isEncoding(encoding)
Returns true if the encoding is a valid encoding argument, false otherwise.

2: Buffer.isBuffer(obj)
Tests if obj is a Buffer.

3: Buffer.byteLength(string[, encoding])
Gives the actual byte length of a string. encoding defaults to 'utf8'. It is not the same as String.prototype.length, since String.prototype.length returns the number of characters in a string.

4: Buffer.concat(list[, totalLength])
Returns a buffer which is the result of concatenating all the buffers in the list together.

5: Buffer.compare(buf1, buf2)
The same as buf1.compare(buf2). Useful for sorting an array of buffers.
*/