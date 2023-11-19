const http = require("http");
// get all files
const homepage = readFileSync("./index.html");
const server = http.createServer(function (req, res) {
 const url = req.url;
 if (url === "/") {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(homepage);
  res.end();
 } else if (url === "/about") {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>About page</h1>");
  res.end();
 } else {
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1>Page not found</h1>");
  res.end();
 }
});

server.listen(4999);
