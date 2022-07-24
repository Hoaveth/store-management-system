const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.port || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.use("/api/users", require("./routes/userRoutes"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`Server started on port ${port}`));
