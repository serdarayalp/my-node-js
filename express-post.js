let express = require('express');
let bodyParser = require('body-parser');

let app = express();

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/form-post.html', function (req, res) {
    res.sendFile(__dirname + "/" + "form-post.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // Prepare output in JSON format
    let response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    console.log(response);

    res.end(JSON.stringify(response));
})


let server = app.listen(8081, function () {
    console.log("Example app listening on port 8081");
})