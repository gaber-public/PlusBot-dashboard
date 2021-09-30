var express = require("express");
var { Client } = require("discord.js");
var client = new Client();
const { TOKEN } = require("./config");
var app = express();
var http = require('http');
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://p-bot.glitch.me/`);
}, 280000); 
console.log("on");

app.get("/", (req, res) => {
    res.render("index", {
        client: client
    });
});

app.get("/stats", (req, res) => {
    res.render("stats", {
        client: client
    });
});

app.get("/devs", (req, res) => {
    res.render("devs", {
        client: client
    });
});

app.get("/cmds", (req, res) => {
    res.render("cmds", {
        client: client
    });
});

client.on("ready", () => {
    console.log("Done ")
});


client.login(TOKEN);
  