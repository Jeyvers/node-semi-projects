const express = require("express");

const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
 res.json(products);
});

app.all("*", (req, res) => {
 res.status(400).send("resource not found");
});

app.listen(4999, () => {
 console.log("server listening on port 4999");
});
