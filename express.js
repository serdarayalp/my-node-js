let express = require('express');

let app = express();

app.get('/', function (request, response) {
    response.send('ROOT');
})

let server = app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
})