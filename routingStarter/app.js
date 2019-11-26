const http = require("http");
const fs = require("fs");

const encoding = "utf8";
const indexFile = "index.html";
const contentType = "text/html";
const pageNotFound = "notFound.html";
const contactFile = "contact.html";

const myJsonObj = {
    name: "Guy Personguy",
    job: "Doing Stuff",
    age: 84,
    hobbies: ["biking", "hiking", "sailing", "other things"],
    iceCream: "Neopolitan"
}


const serverPort = 3000;
const ipAddress = "127.0.0.1";
const serverExMssg = "Node server is now active on port: ";


const server = http.createServer((req, res) => {
    console.log("Request was made: " + req.url);
    if(req.url === "/home" || req.url === "/"){
        htmlPageSender(200, indexFile, res);
    } 
    else if(req.url === "/contact"){
        htmlPageSender(200, contactFile, res);
    }
    else if (req.url === "/api/myj"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(myJsonObj));
    }
    else {
        htmlPageSender(404, pageNotFound, res);
    }
});

const htmlPageSender = (statusCode, theFile, res) => {
    res.writeHead(statusCode, {"Content-Type": contentType});
    fs.createReadStream(__dirname + "/" + theFile ).pipe(res);
}

server.listen(serverPort, ipAddress);
console.log(serverExMssg + serverPort);