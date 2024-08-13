const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// const tasks = require("./routes/tasks");
// const connectDB = require("./db/connect");
// require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
// if we don't use this, we won't have the data in req.body
app.use(express.json());

// ROOT ROUTE
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
 try {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, console.log(`Server is listening on port ${port}...`));
 } catch (error) {
  console.log(error);
 }
};
start();
