// models/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
});

UserSchema.pre("save", async function (next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;

	next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;