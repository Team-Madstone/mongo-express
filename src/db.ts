import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// `strictQuery` option will be switched back to `false` by default in Mongoose 7
// 버전 변경 되면서 이것 사용해야한다고 함
mongoose.set("strictQuery", false);

export const DB_URI = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

export const connectDB = async () => {
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  await mongoose.connect(DB_URI);
};
