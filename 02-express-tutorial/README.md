## BEGAN WITH THIS PIECE OF CODE

const http = require("http");
const server = http.createServer(function (req, res) {
console.log("user hit the server");
// to end the response
res.end("Home page");
});

```
// the number in the listen is the port number (a communication endpoint - there are different notable well-known port numbers :443 is for https addresses (http secure protocol))
server.listen(4999);
```

### UPDATE

then updated to this which will be returned for every request

```
const http = require("http");
const server = http.createServer(function (req, res) {
 console.log("user hit the server");
 console.log(req.method, req.url);
 // content type matters because it tells the browser how the content should be treated (mime type)
 // the first value is the response status code
 res.writeHead(200, { "content-type": "text/html" });
 res.write("<h1>Home page</h1>");
 // to end the response
 res.end();
});

// the number in the listen is the port number (a communication endpoint - there are different notable well-known port numbers :443 is for https addresses (http secure protocol))
server.listen(4999);
```

### SHOWING HOW MULTIPLE URLS ARE HANDLED WITHOUT EXPRESS

```
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



```
