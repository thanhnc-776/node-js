const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/admin', (req, res) => {
	res.render('home', { layout: 'home', title: 'Dashboard' });
});

app.get('/admin/buttons', (req, res) => {
	res.render('buttons', { title: 'Buttons' });
});

app.get('/admin/cards', (req, res) => {
	res.render('cards', { title: 'Cards' });
});

app.get('/admin/colors', (req, res) => {
	res.render('colors', { title: 'Colors' });
});

app.get('/admin/borders', (req, res) => {
	res.render('borders', { title: 'Borders' });
});

app.get('/admin/animations', (req, res) => {
	res.render('animations', { title: 'Animations' });
});

app.get('/admin/other', (req, res) => {
	res.render('other', { title: 'Other' });
});

app.get('/admin/login', (req, res) => {
	res.render('login', { layout: 'form', title: 'Login' });
});

app.get('/admin/register', (req, res) => {
	res.render('register', { layout: 'form', title: 'Register' });
});

app.get('/admin/forgot-password', (req, res) => {
	res.render('forgot-password', { layout: 'form', title: 'Forgot Password' });
});

app.get('/admin/404', (req, res) => {
	res.render('404', { title: '404' });
});

app.get('/admin/blank', (req, res) => {
	res.render('blank', { title: 'Blank' });
});

app.get('/admin/charts', (req, res) => {
	res.render('charts', { title: 'Charts' });
});

app.get('/admin/tables', (req, res) => {
	res.render('tables', { title: 'Tables' });
});

app.listen(PORT, () => console.log(`Connect successfully with http://localhost:${PORT}`));
