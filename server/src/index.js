import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
connectDB(process.env.DB_URL);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
