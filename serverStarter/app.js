const http = require("http");
const fs = require("fs");

const encoding = "utf8";
const fileName = "index.html";
const contentType = "application/json";
// const writeMe = "writeMe.txt";

const myReadStream = fs.createReadStream(__dirname+"/"+fileName, encoding);
// const myWriteStream = fs.createWriteStream(__dirname+"/"+writeMe);

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
    res.writeHead(200, {"Content-Type": contentType});
    res.end(JSON.stringify(myJsonObj));
});

server.listen(serverPort, ipAddress);
console.log(serverExMssg + serverPort);