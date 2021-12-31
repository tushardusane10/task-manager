const mongoose = require("mongoose");

const dbURL = "mongodb://localhost:27017/task-manager";
const connection = mongoose.connect(dbURL, (error) => {
  if (error) throw new Error(`Error connection to  ${dbURL}`);
  else console.log(`connected to DB ${dbURL}`);
});

exports = [connection];
