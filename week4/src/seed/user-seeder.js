const fs = require('fs');
const User = require('../models/user');

const getUsersData = JSON.parse(fs.readFileSync('src/data/users.json', 'utf8')).body;

async function createUser() {
	return await User.insertMany(getUsersData);
}
module.exports = createUser;
