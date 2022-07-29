var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const sessionSchema = new Schema({
	name: String,
	date: String,
	start: String,
	end: String,
	course: [String],
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

// const Sequelize = require("sequelize");
// const sequelize = require("../utils/dbConnection");

// const Session = sequelize.define("session", {
//   name: {
//     type: Sequelize.STRING,
//   },
//   date: {
//     type: Sequelize.DATE,
//   },
//   end: {
//     type: Sequelize.DATE,
//   },
//   course: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Session;