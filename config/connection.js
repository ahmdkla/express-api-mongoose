const mongoose = require("mongoose");
const { DATABASE_NAME, DATABASE_HOST_LIVE_MONGOOSE } = require("./environment");

mongoose
  .connect(DATABASE_HOST_LIVE_MONGOOSE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(error => {
    console.log("Error cant connect to database");
  });

const db = mongoose.connection;
module.exports = db;
