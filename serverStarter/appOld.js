const http = require("http");
const fs = require("fs");

const encoding = "utf8";
const fileName = "index.html";
// const writeMe = "writeMe.txt";

const myReadStream = fs.createReadStream(__dirname+"/"+fileName, encoding);
// const myWriteStream = fs.createWriteStream(__dirname+"/"+writeMe);

/*
 myReadStream.on("data", (chunk)=> {
    console.log("New chunk received");
    // console.log(chunk);
    myWriteStream.write(chunk);
});
 */

 //instead the following can be used:

// myReadStream.pipe(myWriteStream);

/* 
const serverPort = 3000;
const ipAddress = "127.0.0.1";
const serverExMssg = "Node server is now active on port: ";

const server = http.createServer((req, res) => {
    console.log("Request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("This is a statement coming to you from the res.end() method inside the http.createServer() method");
});

server.listen(serverPort, ipAddress);
console.log(serverExMssg + serverPort);
 */

const serverPort = 3000;
const ipAddress = "127.0.0.1";
const serverExMssg = "Node server is now active on port: ";

// const server = http.createServer((req, res) => {
//     console.log("Request was made: " + req.url);
//     myReadStream.pipe(res);
// });

// server.listen(serverPort, ipAddress);
// console.log(serverExMssg + serverPort);

const server = http.createServer((req, res) => {
    console.log("Request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    myReadStream.pipe(res);
});

server.listen(serverPort, ipAddress);
console.log(serverExMssg + serverPort);