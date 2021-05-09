const express = require('express');
const router = express.Router();

const fs = require('fs');

let products = JSON.parse(fs.readFileSync('../week3/src/data/product.json', 'utf8')).body;
let categories = JSON.parse(fs.readFileSync('../week3/src/data/categories.json', 'utf8')).body;
let users = JSON.parse(fs.readFileSync('../week3/src/data/users.json', 'utf8')).body;

router.get('/', (req, res) => {
	res.redirect('/admin');
});

router.get('/admin', (req, res) => {
	res.render('dashboard', {
		title: 'Dashboard',
		products,
		categories,
		users,
	});
});

router.get('/admin/products', (req, res) => {
	res.render('products', { title: 'Products', products });
});

router.get('/admin/categories', (req, res) => {
	res.render('categories', { title: 'Categories', categories });
});

router.get('/admin/users', (req, res) => {
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

router.get('/admin/login', (req, res) => {
	res.render('login', { layout: 'form', title: 'Login' });
});

router.get('/admin/register', (req, res) => {
	res.render('register', { layout: 'form', title: 'Register' });
});

router.get('/admin/forgot-password', (req, res) => {
	res.render('forgot-password', { layout: 'form', title: 'Forgot Password' });
});

module.exports = router;
