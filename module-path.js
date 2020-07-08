/*
Provides utilities for handling and transforming file paths.
*/


/*
Methods

1: path.normalize(p)
Normalize a string path, taking care of '..' and '.' parts.

2: path.join([path1][, path2][, ...])
Join all the arguments together and normalize the resulting path.

3: path.resolve([from ...], to)
Resolves to an absolute path.

4: path.isAbsolute(path)
Determines whether the path is an absolute path. An absolute path will always resolve to the same location,
regardless of the working directory.

5: path.relative(from, to)
Solve the relative path from from to to.

6: path.dirname(p)
Return the directory name of a path. Similar to the Unix dirname command.

7: path.basename(p[, ext])
Return the last portion of a path. Similar to the Unix basename command.

8: path.extname(p)
Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.',
then it returns an empty string.

9: path.parse(pathString)
Returns an object from a path string.

10: path.format(pathObject)
Returns a path string from an object, the opposite of path.parse above.
*/


/*
Properties

1: path.sep
The platform-specific file separator. '\\' or '/'.

2: path.delimiter
The platform-specific path delimiter, ; or ':'.

3: path.posix
Provide access to aforementioned path methods but always interact in a posix compatible way.

4: path.win32
Provide access to aforementioned path methods but always interact in a win32 compatible way.
*/


var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));