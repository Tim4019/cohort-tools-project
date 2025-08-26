const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/cohorts_restapi";

async function connectDB() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log("Connected to DB:", connection.connections[0].name);
  } catch (err) {
    console.error("Error connecting to mongo:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
