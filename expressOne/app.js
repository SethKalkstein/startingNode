const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

//the "/assets" matches the url route. The "assets" inside express.static("assets") matches
//the folder where the route is being directed
app.use("/assets", express.static("assets"));

//I could rename my assets folder blah, and when people went to url://www.<thisSite>/assets
//it will bring up the file in the blah folder as long as it is defined as below;
// app.use("/assets", express.static("blah"));

app.get("/", (req, res)=> {
    res.render("index");
});

app.get("/contact/", (req, res)=> {
    console.log(req.query);
    const rs = req.query;
    for(const key in rs){
        console.log("key: " + key);
        console.log("value: " + rs[key]);
    }
    res.render("contact", {queryString: req.query});
});

app.get("/profile/:name", (req, res)=> {
    const personData = {height: 80, job: "cool person", hobbies: ["surfing", "yoga", "drums"]};
    res.render("profile", {person: req.params.name, data: personData});
});

app.listen(port);

//middleware 
/* app.use("/assets", (req, res, next) => {
    console.log(req.url);
    next();
}); */

//sending files, or directly inserting the text in the browser as opposed to rendering views as is done above
/* app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/index.html");
    console.log(req.path);
});

app.get("/contact/", (req, res)=> {
    res.sendfile(__dirname+"/contact.html");
});

app.get("/profile/:id", (req, res)=> {
    res.send("<h1>Welcome to the profile page</h1>\n<p>This is the profile of the person with id: " + req.params.id + "</p>");
}); */