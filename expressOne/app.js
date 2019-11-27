const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.sendfile(__dirname+"/index.html");
    console.log(req.path);
});

app.get("/contact/", (req, res)=> {
    res.sendfile(__dirname+"/contact.html");
});

/* app.get("/profile/:id", (req, res)=> {
    res.send("<h1>Welcome to the profile page</h1>\n<p>This is the profile of the person with id: " + req.params.id + "</p>");
}); */
app.get("/profile/:name", (req, res)=> {
    const personData = {height: 80, job: "cool person", hobbies: ["surfing", "yoga", "drums"]};
    res.render("profile", {person: req.params.name, data: personData});
});

app.listen(port);
