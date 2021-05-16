const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: String,
  avatar: String,
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  dob: {type: Date, default: Date.now},
  gender: String,
  email: String,
  isEmailValidate: Boolean,
  roles: String,
  username: { type: String, require: true },
  zipcode: String,
  phoneNumber: Number,
  country: String,
});

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

console.log(User);

module.exports = User;
