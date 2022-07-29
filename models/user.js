var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
	  name: String,
    type: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// const Sequelize = require("sequelize");

// const sequelize = require("../utils/dbConnection");

// const User = sequelize.define("user", {
//   name: {
//     type: Sequelize.INTEGER,
//   },
//   type: {
//     type: Sequelize.INTEGER,
//   },
// });

// module.exports =  User;