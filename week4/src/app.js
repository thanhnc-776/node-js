const express = require('express');
const exphbs = require('express-handlebars');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const methodOverride = require('method-override');
const moment = require('moment');

const debug = require('debug')('app');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const apiRouter = require('./routes/api/api');

const app = express();

app.log = debug;

app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		helpers: {
			generateDate: (date, format) => {
				return moment(date).format(format);
			},
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', productsRouter);
app.use('/', categoriesRouter);
app.use('/', apiRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (err, req, res) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

app.start = (PORT, MONGO_URL) => {
	mongoose
		.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
		.then(() => {
			debug('Database connect success');
			app.listen(PORT, () => console.log('App started and listening on port', PORT));
		})
		.catch((err) => {
			debug('Database connection error:' + err);
		});
};

module.exports = app;
