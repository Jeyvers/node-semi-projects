const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
 res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
 // or path.join()
});

app.all("*", (req, res) => {
 res.status(400).send("resource not found");
});

app.listen(4999, () => {
 console.log("server listening on port 4999");
});
