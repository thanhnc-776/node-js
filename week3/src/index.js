const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

const router = require('./routes/app.js');
app.use(router);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log(`Connect successfully with http://localhost:${PORT}`));
