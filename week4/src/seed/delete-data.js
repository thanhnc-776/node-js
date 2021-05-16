const mongoose = require('mongoose');
const Category = require('../models/category');
const Product = require('../models/product');
const User = require('../models/user');

const { MONGO_URI = 'mongodb://localhost:27017/nordic' } = process.env;

const deleteData = mongoose
	.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(async () => {
		await User.remove({});
	  await Category.remove({});
	  await Product.remove({});
	})
	.catch((err) => console.log(err));

module.exports = deleteData;
