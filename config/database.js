const mongoose = require("mongoose");
const config = require("config");
const database = config.get("mongoURI");

const connectDatabase = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("Connected to MongoDB..")
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1); 
  }
}

module.exports = connectDatabase;
