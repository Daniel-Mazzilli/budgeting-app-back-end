// Dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController");

// Configure
const app = express();

// Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use("/transactions", transactionsController);

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the budgeting API");
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

app.get("/invalid-input", (req, res) => {
  res.status(422).json({
    error: "Invalid input",
  });
});

app.get("*", (req, res) => {
  res.redirect("/not-found");
});

// Export
module.exports = app;
