const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./serverConfig");

async function connectToDB() {
  try {
    if (NODE_ENV == "developement") {
      await mongoose.connect(ATLAS_DB_URL);
      console.log("db conntected");
    }
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDB;
