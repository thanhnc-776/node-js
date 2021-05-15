const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
	await User.find({})
		.lean()
		.then((users) => res.render('users', { title: 'Users', users }));
});

module.exports = router;
