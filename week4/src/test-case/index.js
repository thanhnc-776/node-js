const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

module.exports = {
	loadUsers: () => {
		User.find({})
			.limit(5)
			.exec()
			.then((results) => {
				console.log(results.map((item) => item.toJSON()));
			});
	},
	loadProducts: () => {
		Product.find({})
			.populate('categoryId', 'name')
			.limit(5)
			.exec()
			.then((results) => {console.log(results.map((item) => item.toJSON()));});
	},
	loadCategories: () => {
		return Category.find({})
			.limit(5)
			.then((results) => {
				return results;
			});
	},
};
