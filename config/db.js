const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://mock-user:mockpwd@cluster0.mkwi3e0.mongodb.net/?appName=Cluster0";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
