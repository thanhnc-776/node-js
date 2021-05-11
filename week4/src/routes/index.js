const express = require('express');
const router = express.Router();
// const fs = require('fs');
const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');

// let products = JSON.parse(fs.readFileSync('../week4/src/data/product.json', 'utf8')).body;
// let categories = JSON.parse(fs.readFileSync('../week4/src/data/categories.json', 'utf8')).body;
// let users = JSON.parse(fs.readFileSync('../week4/src/data/users.json', 'utf8')).body;

router.get('/', (req, res) => {
	res.redirect('/admin');
});

router.get('/admin', async (req, res) => {
	let products = await Product.countDocuments({});
	let categories = await Category.countDocuments({});
	let users = await User.countDocuments({});
	res.render('dashboard', {
		title: 'Dashboard',
		products,
		categories,
		users,
	});
});

router.get('/admin/products', async (req, res) => {
	await Product.find({})
		.lean()
		.then((products) => res.render('products', { title: 'Products', products }));
});

router.get('/admin/categories', async (req, res) => {
  await Category.find({})
		.lean()
		.then((categories) => res.render('categories', { title: 'Categories', categories }));
});

router.get('/admin/users', async (req, res) => {
	let users = await User.find({});
	res.render('users', { title: 'Users', users });
});

router.get('/admin/orders', (req, res) => {
	res.render('orders', { title: 'Orders' });
});

router.get('/admin/404', (req, res) => {
	res.render('404', { title: '404' });
});

router.get('/admin/blank', (req, res) => {
	res.render('blank', { title: 'Blank' });
});

router.get('/login', (req, res) => {
	res.render('login', { layout: 'form', title: 'Login' });
});

router.get('/admin/register', (req, res) => {
	res.render('register', { layout: 'form', title: 'Register' });
});

router.get('/admin/forgot-password', (req, res) => {
	res.render('forgot-password', { layout: 'form', title: 'Forgot Password' });
});

module.exports = router;
