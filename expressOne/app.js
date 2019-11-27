const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send("<h1>Welcome to my web page</h1>\n<p>I really think you'll like it</p>");
});

app.get("/contact/", (req, res)=> {
    res.send("<h1>This is the contact page</h1>\n<p>Hello. Wassup!?</p>");
});

app.get("/profile/:id", (req, res)=> {
    res.send("<h1>Welcome to the profile page</h1>\n<p>This is the profile of the person with id: " + req.params.id + "</p>");
});


app.listen(port);
