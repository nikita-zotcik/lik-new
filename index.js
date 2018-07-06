var http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
});

var port = process.env.PORT || 1337;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

console.log("Server running at http://localhost:%d", port);
