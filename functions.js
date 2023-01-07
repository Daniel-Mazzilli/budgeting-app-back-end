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

const findByID = (array, id) => {
  let obj = {
    element: undefined,
    index: undefined,
  };
  array.find((e, i) => {
    if (e.id === +id) {
      obj = {
        element: e,
        index: i,
      };
    }
  });
  return obj;
};

const incorrectID = (response) => {
  return response.status(404).json({
    error: "id cannot be found",
  });
};

module.exports = { checkInput, findByID, incorrectID };
