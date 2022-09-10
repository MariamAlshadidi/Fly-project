const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
	seat: {
		type: String,
		match: /[A-F][1-9]\d?/
	},
	// price: {
	// 	type: Number,
	// 	min: 0
	// },
	cabin_class: {
		type: String,
	},
	flight: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'flight'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}

})

const ticket = mongoose.model("ticket", ticketSchema)

module.exports = ticket