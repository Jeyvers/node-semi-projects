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

### SHOWING HOW MULTIPLE URLS ARE HANDLED

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

### SHOWING HOW A FULL WEBPAGE IS HANDLED WITH JUST HTTP (HTML, CSS & JS PAGE)

```
const http = require("http");
const { readFileSync } = require("fs");
// get all files
const homepage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer(function (req, res) {
 const url = req.url;
 if (url === "/") {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(homepage);
  res.end();
 } else if (url === "/styles.css") {
  res.writeHead(200, { "content-type": "text/css" });
  res.write(homeStyles);
  res.end();
 } else if (url === "/logo.svg") {
  res.writeHead(200, { "content-type": "image/svg+xml" });
  res.write(homeImage);
  res.end();
 } else if (url === "/browser-app.js") {
  res.writeHead(200, { "content-type": "text/javascript" });
  res.write(homeLogic);
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

#### BUG FIX LIST

- Port 4999 not responding; there was a second bracket surrounding the port code

#### NOTES

    - Static assets refer files that the server doesn't have to change.
    - The middleware in node. js is a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.
        - 1)Express app receives a request when someone hits a server for which it will create

request and response. - 2)middleware is used to manipulate request. - 3)It is middleware because it is a function that run between request and response cycle. - 4) middleware stack. middleware that appear first will run first. - 5)middleware is like pipeline which end with response object.
