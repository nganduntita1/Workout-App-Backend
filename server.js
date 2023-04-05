require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(res.path, req.method);
  next();
});

// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
// });

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
