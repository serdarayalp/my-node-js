// Provides basic operating-system related utility functions.

/*
1: os.tmpdir()
Returns the operating system's default directory for temp files.

2: os.endianness()
Returns the endianness of the CPU. Possible values are "BE" or "LE".

3: os.hostname()
Returns the hostname of the operating system.

4: os.type()
Returns the operating system name.

5: os.platform()
Returns the operating system platform.

6: os.arch()
Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".

7: os.release()
Returns the operating system release.

8: os.uptime()
Returns the system uptime in seconds.

9: os.loadavg()
Returns an array containing the 1, 5, and 15 minute load averages.

10: os.totalmem()
Returns the total amount of system memory in bytes.

11: os.freemem()
Returns the amount of free system memory in bytes.

12: os.cpus()
Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz),
and times (an object containing the number of milliseconds the CPU/core
    spent in: user, nice, sys, idle, and irq).

13: os.networkInterfaces()
Get a list of network interfaces.
*/

/*
Properties:
    os.EOL: A constant defining the appropriate End-of-line marker for the operating system.
*/

let os = require("os");

// tmpdir
console.log('tmpdir : ' + os.tmpdir());

// Endianness
console.log('endianness : ' + os.endianness());

// hostname
console.log('hostname : ' + os.hostname());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// OS arch
console.log('Arch : ' + os.arch());

// OS release
console.log('Release : ' + os.release());

// OS Uptime
console.log('Uptime : ' + os.uptime());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

// CPUs
// console.log(os.cpus());

// OS NetworkInterfaces
console.log('NetworkInterfaces : ' + os.networkInterfaces());

// OS EOL
console.log('EOL : ' + os.EOL);