const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

//Setting up morgan
const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

/* Setting up the server */
app.use((req, res) => {
    //console.log(req.headers); This won't be needed becasue Morgan logs the information.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* Setting up the server, the method will take a callback function that express calls a middleware function.
In express, a middleware function has access to three parameters req, res and next.

Setting up morgan: initiating morgan without a callback. Instead use the morgan function with the argument of 'dev'.
This will configure Morgan to log the development version.
__dirname: special variable in Node. It will refer to the absolute path of the current directory of the file that is in.
*/