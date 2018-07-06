const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


app.use('/static', express.static(__dirname + '/build/static'));

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/build/index.html`)
// });
app.get('/', (req, res) => {
    res.send('WOWOWOWOWO')
});



const port = process.env.PORT || 1337;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

console.log("Server running at http://localhost:%d", port);
