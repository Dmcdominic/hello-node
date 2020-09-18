//Open this with Visual Studio Code and check the README.md

// Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//The createServer() method of http creates a new HTTP server and puts it into a constant "server" I pass a function that handles a request
const server = http.createServer(handleRequest);

//this is the function that will handle the request, now just a simple connection
function handleRequest(req, res) {
    res.statusCode = 200; //we set the statusCode property to 200, to indicate the client that the request was successful in accordance to http standards.
    res.write('Hello World!!'); //write a response to the client
    res.end(); //end the response
}

//The server is set to listen on the specified port and hostname. When the server is ready, the callback function is called, in this case informing us that the server is running.
server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port + "\/");
});