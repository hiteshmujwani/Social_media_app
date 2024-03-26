import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//configuring .ENV file
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.send("Hello from server side");
});

app.listen(
  process.env.PORT,
  console.log("server is running on " + process.env.PORT)
);
