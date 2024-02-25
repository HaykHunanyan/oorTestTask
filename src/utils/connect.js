const mongoose = require("mongoose");
const config = require("config");

async function connect() {
  const dbUri = process?.env?.mongodbUrl || config.get("mongodbUrl");
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

module.exports =  connect;
