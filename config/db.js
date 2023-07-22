const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MongoDb connection Successfull ${mongoose.connection.host}`.bgGreen.black
    );
  } catch (error) {
    console.log(`Mongodb Server Issue${error}`.bgRed.black);
  }
};

module.exports = connectDB;
