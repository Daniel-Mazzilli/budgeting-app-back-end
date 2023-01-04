const express = require("express");
const app = require("../app")
const transactions =  express.Router();

const transactionsData = require("../models/transactions");

// Index
transactions.get("/", (req, res) => {
    res.status(200).json(transactionsData);
})

module.exports = transactions;