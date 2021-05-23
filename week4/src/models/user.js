const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	avatar: String,
	firstName: {
		type: String,
		required: true,
	},
	lastName: String,
	dob: { type: Date, default: Date.now },
	gender: String,
	email: String,
	isEmailValidate: Boolean,
	role: String,
	username: { type: String, require: true },
	zipcode: String,
	phoneNumber: Number,
	country: String,
});

UserSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
		const isValidType = ['asc', 'desc'].includes(req.query.type);
		return this.sort({
			[req.query.column]: isValidType ? req.query.type : 'desc',
		});
    return this;
	}
}

UserSchema.virtual('fullName')
	.get(function () {
		return this.firstName + ' ' + this.lastName;
	})
	.set(function (v) {
		this.firstName = v.substr(0, v.indexOf(' '));
		this.lastName = v.substr(v.indexOf(' ') + 1);
	});

UserSchema.pre('save', function () {
	console.log('pre save');
});

UserSchema.index({ email: 1 });

const User = mongoose.model('User', UserSchema);
User.createIndexes((err) => {
	if (err) {
		console.log(err);
	}
});

module.exports = User;
