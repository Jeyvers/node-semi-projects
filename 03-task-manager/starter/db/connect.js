const mongoose = require("mongoose");

const connectionString = `mongodb+srv://jeyi:QUT51Nb6NeBvOwUz@nodeexpressprojects.jdpbf7b.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects`;
mongoose
 .connect(connectionString, {})
 .then((res) => console.info("connected to the db...", res))
 .catch((err) => console.error("err", err));
