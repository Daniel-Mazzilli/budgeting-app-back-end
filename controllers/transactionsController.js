const { response } = require("express");
const express = require("express");
// const app = require("../app")
const { checkInput } = require("../functions");
const transactionsData = require("../models/transactions");
const transactions = express.Router();

// Index
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsData);
});

// Show
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const found = transactionsData.find((e) => e.id === +id);
  if (!found) {
    res.redirect("/not-found");
  } else {
    res.status(200).json(found);
  }
});

// Create
transactions.post("/", checkInput, (req, res) => {
  const id = Date.now();
  const newBody = { ...req.body, id };
  transactionsData.push(newBody);
  res.status(200).json(transactionsData);
});

module.exports = transactions;
