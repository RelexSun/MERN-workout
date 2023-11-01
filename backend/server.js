require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/workout", workoutRoutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
