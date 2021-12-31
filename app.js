const express = require("express");
const taskRouter = require("./src/routers/taskRouter");
const userRouter = require("./src/routers/userRouter");
require("./src/db/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(taskRouter);
app.use(userRouter);

app.listen(PORT, (error) => {
  if (!error) console.log(`Server started on port ${PORT}`);
});
