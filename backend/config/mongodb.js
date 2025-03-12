import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB Connected Successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/vinylecommerceapp`);
  } catch (error) {
    console.error("❌ Initial MongoDB Connection Error:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};

export default connectDB;
