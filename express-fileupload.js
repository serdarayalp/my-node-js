var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

var fs = require("fs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(multer({ dest: __dirname + '/uploads' }));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })

app.get('/form-fileupload.html', function (req, res) {
    res.sendFile(__dirname + "/" + "form-fileupload.html");
})

app.post('/file_upload', upload.single('file'), function (req, res) {

    /*
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    
    var file = __dirname + "/" + req.files.file.name;

    fs.readFile(req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                let response = {
                    message: 'File uploaded successfully',
                    filename: req.files.file.name
                };
            }

            console.log(response);

            res.end(JSON.stringify(response));
        });
    });
    */
})


let server = app.listen(8081, function () {
    console.log("Example app listening on port 8081");
})