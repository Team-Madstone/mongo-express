import express, { Request, Response } from "express";

const PORT = process.env.PORT || 4000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello express");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
});
