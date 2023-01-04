// Dependencies
const app = require("./app");

// Configure
require("dotenv").config();
const PORT = process.env.PORT || 4416;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
