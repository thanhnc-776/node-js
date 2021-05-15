const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', async (req, res) => {
	await Product.find({})
		.lean()
		.then((products) => res.render('products', { title: 'Products', products }));
});

router.post('/products', async (req, res) => {
	const product = new Product(req.body);
	product.save().then(() => {
		res.redirect('/products');
	});
});

router.get('/products/create', async (req, res) => {
	res.render('create-product', { title: 'Create Products' });
});

router.get('/products/:id/edit', async (req, res) => {
	await Product.findById(req.params.id)
		.lean()
		.then((product) => res.render('detail-product', { title: 'Detail Products', product }));
});

router.put('/products/:id', async (req, res) => {
	await Product.updateOne({ _id: req.params.id }, req.body)
		.then(() => res.redirect('/products'));
});

// router.delete('/products/:id', async (req, res) => {
// 	Product.findByIdAndDelete(req.params.id);
// 	await Product.find({})
// 		.lean()
// 		.then((products) => res.render('products', { title: 'Products', products }));
// });

module.exports = router;
