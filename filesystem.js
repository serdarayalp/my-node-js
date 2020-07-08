var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

/*
Open a File:
fs.open(path, flags[, mode], callback)

Parameters
    path − This is the string having file name including path.
    flags − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.
    mode − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.
    callback − This is the callback function which gets two arguments (err, fd).



Flags: Flags for read/write operations are −

1: r
Open file for reading. An exception occurs if the file does not exist.

2: r+
Open file for reading and writing. An exception occurs if the file does not exist.

3: rs
Open file for reading in synchronous mode.

4:rs+
Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' 
about using this with caution.

5: w
Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

6: wx
Like 'w' but fails if the path exists.

7: w+
Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

8: wx+
Like 'w+' but fails if path exists.

9: a
Open file for appending. The file is created if it does not exist.

10: ax
Like 'a' but fails if the path exists.

11: a+
Open file for reading and appending. The file is created if it does not exist.

12: ax+
Like 'a+' but fails if the the path exists.    
*/



// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});


/*
Get File Information:
    fs.stat(path, callback)


1: stats.isFile()
returns true if file type of a simple file.

2: stats.isDirectory()
Returns true if file type of a directory.

3: stats.isBlockDevice()
Returns true if file type of a block device.

4: stats.isCharacterDevice()
Returns true if file type of a character device.

5: stats.isSymbolicLink()
Returns true if file type of a symbolic link.

6: stats.isFIFO()
Returns true if file type of a FIFO.

7: stats.isSocket()
Returns true if file type of asocket.    
*/

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile? " + stats.isFile());
    console.log("isDirectory? " + stats.isDirectory());
});


/*
Writing a File:
    fs.writeFile(filename, data[, options], callback)

Parameters:
    path − This is the string having the file name including path.
    data − This is the String or Buffer to be written into the file.
    options − The third parameter is an object which will hold {encoding, mode, flag}. 
        By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
    callback − This is the callback function which gets a single parameter err that 
        returns an error in case of any writing error.
*/

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});


/*
Reading a File: This method will use file descriptor to read the file.
    If you want to read the file directly using the file name, then you should use another method available.

    fs.read(fd, buffer, offset, length, position, callback)

Parameters:
    fd − This is the file descriptor returned by fs.open().
    buffer − This is the buffer that the data will be written to.
    offset − This is the offset in the buffer to start writing at.
    length − This is an integer specifying the number of bytes to read.
    position − This is an integer specifying where to begin reading from in the file. 
        If position is null, data will be read from the current file position.
    callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer).

*/

let buf = new Buffer.alloc(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");

    console.log("Going to read the file");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});


/*
Closing a File
    fs.close(fd, callback)

Parameters
    fd − This is the file descriptor returned by file fs.open() method.
    callback − This is the callback function. No arguments other than a possible 
        exception are given to the completion callback.

*/


let buf2 = new Buffer.alloc(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");

    console.log("Going to read the file");
    fs.read(fd, buf2, 0, buf2.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buf2.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("File closed successfully.");
        });
    });
});


/*
Truncate a File
    fs.ftruncate(fd, len, callback)

Parameters
    fd − This is the file descriptor returned by fs.open().
    len − This is the length of the file after which the file will be truncated.
    callback − This is the callback function. No arguments other than a possible exception are given to 
        the completion callback.

*/

let buf3 = new Buffer.alloc(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to truncate the file after 10 bytes");

    // Truncate the opened file.
    fs.ftruncate(fd, 10, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("File truncated successfully.");
        console.log("Going to read the same file");

        fs.read(fd, buf3, 0, buf3.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }

            // Print only read bytes to avoid junk.
            if (bytes > 0) {
                console.log(buf3.slice(0, bytes).toString());
            }

            // Close the opened file.
            fs.close(fd, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("File closed successfully.");
            });
        });
    });
});