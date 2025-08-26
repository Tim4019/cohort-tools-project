// my variables

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
// const path = require('path');

dotenv.config();

const PORT = process.env.PORT || 5005;
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("public"));

//routes
const cohortsRoutes = require("./routes/cohort.routes");
const studentsRoutes = require("./routes/student.routes");

app.use("/api/cohorts", cohortsRoutes);
app.use("/api/students", studentsRoutes);

// prosorino check mexri na doulepsei
app.get("/", async (_req, res) => {
  try {
    return res.status(200).json("We re gucci");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
