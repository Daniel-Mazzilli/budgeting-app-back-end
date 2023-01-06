const checkInput = (req, res, next) => {
  for (key in req.body) {
    const condition1 = key !== "amount" && typeof req.body[key] !== "string";
    const condition2 = key === "amount" && typeof req.body[key] !== "number";
    if (condition1 || condition2) {
      return res.status(422).json({
        error: "Invalid input",
        item_name: "string data type",
        amount: "number data type",
        date: "string data type",
        from: "string data type",
        category: "string data type",
      });
    }
  }
  next();
};

module.exports = { checkInput };
