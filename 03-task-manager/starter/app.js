const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
// const tasks = require("./routes/tasks");
// const connectDB = require("./db/connect");
// require("dotenv").config();
// const notFound = require("./middleware/not-found");
// const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
// if we don't use this, we won't have the data in req.body
app.use(express.json());
// app.use(express.static("./public"));

// ROOT ROUTE
app.use("/api/v1/tasks", tasks);

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

// app.get(`/api/v1/tasks`) - get all the tasks
// app.post(`/api/v1/tasks`) - create a new task
// app.get(`/api/v1/tasks/:id`) - get a single task
// app.patch(`/api/v1/tasks/:id`) - update task
// app.delete(`/api/v1/tasks/:id`) - delete task
