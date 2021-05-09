const { urlencoded } = require('express');
const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');

const debug = require('debug')('app');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.log = debug;

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express(urlencoded({ extended: false })));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

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
		.connect(MONGO_URL)
		.then(() => {
			debug('Database connect success');
			app.listen(PORT, () => console.log('App started and listening on port', PORT));
		})
		.catch((err) => {
			debug('Database connection error:' + err);
		});
};

module.exports = app;
