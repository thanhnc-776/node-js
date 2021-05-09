const app = require('./app');

const PORT = process.env.PORT || 9999;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/demo01';

app.start(PORT, MONGO_URL);
