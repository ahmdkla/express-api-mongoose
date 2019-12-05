const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, db } = require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));
app.use("/subject", require("./routes/subject"));
app.use("/user", require("./routes/users"));

if (db) {
  app.listen(PORT, () => {
    console.log(`THIS APP LISTEN ON PORT ${PORT}`);
  });
}
