let express = require('express');

let app = express();

app.use(express.static('public'));

app.get('/form.html', function (req, res) {
    res.sendFile(__dirname + "/" + "form.html");
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    let response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);

    res.end(JSON.stringify(response));
})

let server = app.listen(8081, function () {
    console.log("Example app listening on port 8081");
})