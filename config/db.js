const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb+srv://aliamir70801:HKIRgDbUAcHEo85W@cluster0.robezgc.mongodb.net/")
  .on("open", () => {
    console.log("Mongoose connection");
  })
  .on("error", () => {
    console.log("MongoDB connection error");
  });

module.exports = connection;
