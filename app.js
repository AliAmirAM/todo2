const express = require("express");
const body_parser = require("body-parser");
const userRouter = require("./routes/user.route");
const todoRoute = require("./routes/todo.route");
const app = express();

app.use(body_parser.json());

app.use("/", userRouter);
app.use("/", todoRoute);

module.exports = app;
