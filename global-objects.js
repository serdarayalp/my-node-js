/*
__filename
    The __filename represents the filename of the code being executed.
*/

console.log(__filename);

/*
__dirname
    The __dirname represents the name of the directory that the currently 
    executing script resides in.
*/

console.log(__dirname);

/*
setTimeout(cb, ms)
    The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds. 
    The actual delay depends on external factors like OS timer granularity and system load. A timer 
    cannot span more than 24.8 days.

    This function returns an opaque value that represents the timer which can be used to clear the timer.

clearTimeout(t)
    The clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout(). 
    Here t is the timer returned by the setTimeout() function.
*/
function printHello() {
    console.log("Hello, World!");
}

// Now call above function after 2 seconds
let t = setTimeout(printHello, 2000);
clearTimeout(t);


/*
setInterval(cb, ms)
    The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms 
    milliseconds. The actual delay depends on external factors like OS timer granularity and system load. 
    A timer cannot span more than 24.8 days.

    This function returns an opaque value that represents the timer which can be used to clear 
    the timer using the function 
        clearInterval(t).
*/

function printHello2() {
    console.log("Hello, World 2!");
}

// Now call above function after 2 seconds
setInterval(printHello2, 2000);


/*
Global Objects
    The following table provides a list of other objects which we use frequently in our applications.

1: Console
Used to print information on stdout and stderr.

2: Process
Used to get information on current process. Provides multiple events related to process activities.
*/