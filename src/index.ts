import express, { Request, Response } from "express";
import { connectDB, DB_URI } from "./db";

const PORT = process.env.PORT || 4000;
const app = express();

connectDB()
  .then(() => {
    console.log(`✅ DB connected from ${DB_URI} 🚀`);
  })
  .catch((err) => console.log(err));

app.get("/", (req: Request, res: Response) => {
  res.send("hello express");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
});
