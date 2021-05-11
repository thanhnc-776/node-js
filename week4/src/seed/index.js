const mongoose = require('mongoose');
const createCategory = require('./category-seeder')
const createProduct = require('./product-seeder')
const createUser = require('./user-seeder')

const { MONGO_URI = 'mongodb://localhost:27017/nordic' } = process.env;

const mongooseData = mongoose
	.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connection to db successfully!');
		return createCategory();
	})
	.then(() => {
		return createProduct();
	})
	.then(() => {
		return createUser();
	})
	.catch((err) => console.log(err));

module.exports = mongooseData;
