const mongoose = require("mongoose");
const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_HOST_LIVE
} = require("./environment");

console.log(DATABASE_HOST);

mongoose
  .connect(`${DATABASE_HOST}/${DATABASE_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database mongoose");
  })
  .catch(error => {
    console.log("There is something wrong", error);
  });

const db = mongoose.connection;

module.exports = db;
