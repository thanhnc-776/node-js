const mongoose = require("mongoose");
const { loadUsers, loadProducts, loadCategories } = require("./index.js");

const { MONGO_URI = "mongodb://localhost:27017/demo01" } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection to db successfully!");
    // loadUsers();
    return loadCategories();
  })
  .then((categories) => {
    console.log(categories.map((item) => item.toJSON()));
    // loadUsers();
    return loadProducts();
  })
  .catch((err) => console.log(err));
