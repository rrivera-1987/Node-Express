const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

/* Setting up the server */
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/* Line 9, the method will take a callback function that express calls a middleware function.
In express, a middlewate function has access to three parameters req, res and next.

*/