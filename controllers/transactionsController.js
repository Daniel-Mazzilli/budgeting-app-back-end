const { response } = require("express");
const express = require("express");
// const app = require("../app")
const { checkInput, findByID, incorrectID } = require("../functions");
let transactionsData = require("../models/transactions");
const transactions = express.Router();

// Index
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsData);
});

// Show
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const found = findByID(transactionsData, id);
  if (!found.element) {
    incorrectID(res);
  } else {
    res.status(200).json(found.element);
  }
});

// Create
transactions.post("/", checkInput, (req, res) => {
  const id = Date.now();
  const newBody = { ...req.body, id };
  transactionsData.push(newBody);
  res.status(200).json(transactionsData);
});

// Destroy
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const found = findByID(transactionsData, id);
  if (!found.element) {
    incorrectID(res);
  } else {
    const filteredArr = transactionsData.filter((e) => e.id !== +id);
    transactionsData = [...filteredArr];
    res.status(200).json(found.element);
  }
});

// Update
transactions.put("/:id", checkInput, (req, res) => {
  const { id } = req.params;
  const found = findByID(transactionsData, id);
  if (!found.element) {
    incorrectID(res);
  } else {
    transactionsData[found.index] = {
      ...transactionsData[found.index],
      ...req.body,
    };
    res.status(200).json(transactionsData);
  }
});

module.exports = transactions;
