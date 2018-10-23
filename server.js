const express = require('express');
const path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist/todo-list'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/todo-list/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
    console.log('server listening on port ' + port);
});

module.exports = app;
