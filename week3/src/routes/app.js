const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
	res.render('home', { layout: 'home', title: 'Dashboard' });
});

router.get('/admin/buttons', (req, res) => {
	res.render('buttons', { title: 'Buttons' });
});

router.get('/admin/cards', (req, res) => {
	res.render('cards', { title: 'Cards' });
});

router.get('/admin/colors', (req, res) => {
	res.render('colors', { title: 'Colors' });
});

router.get('/admin/borders', (req, res) => {
	res.render('borders', { title: 'Borders' });
});

router.get('/admin/animations', (req, res) => {
	res.render('animations', { title: 'Animations' });
});

router.get('/admin/other', (req, res) => {
	res.render('other', { title: 'Other' });
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

router.get('/admin/404', (req, res) => {
	res.render('404', { title: '404' });
});

router.get('/admin/blank', (req, res) => {
	res.render('blank', { title: 'Blank' });
});

router.get('/admin/charts', (req, res) => {
	res.render('charts', { title: 'Charts' });
});

router.get('/admin/tables', (req, res) => {
	res.render('tables', { title: 'Tables' });
});

module.exports = router;
