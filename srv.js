const express = require("express");

const server = express();


server.set("view engine", "ejs");
server.get("/", (req,res) => {
    res.render("index", {test: "moin"});
});



server.listen("3000", ()=>{console.log("Check")});

