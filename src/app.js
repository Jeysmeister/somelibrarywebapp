import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import booksRouter from "./routes/books.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/somelibrarywebapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api", booksRouter); // Use the "/api" prefix for the books route

// Define other routes similarly

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
