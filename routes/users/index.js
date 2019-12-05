const Router = require("express").Router();

Router.get("/", require("./usersController").getAll);
Router.post("/", require("./usersController").addOne);

module.exports = Router;