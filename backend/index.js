import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//configuring .ENV file
dotenv.config();

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

//routes
app.get("/home", (req, res) => {
  res.send("Hello from server side");
});
app.get("/", (req, res) => {
  res.send("lund");
});

app.listen(
  process.env.PORT,
  console.log("server is running on " + process.env.PORT)
);
