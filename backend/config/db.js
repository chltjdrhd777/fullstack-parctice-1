//# for connection config
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connected");
  } catch (err) {
    console.log("connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
