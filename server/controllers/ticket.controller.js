const Ticket = require("../models/ticket.model")
const bcrypt = require("bcrypt");
const User = require("../models/user.model");


module.exports.findAllTickets = (req, res) => {
    Ticket.find().sort('name')
        .then(allTickets => res.json({ Tickets: allTickets }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findSingleTicket = (req, res) => {
    Ticket.findOne({ _id: req.params.id })
        .then(singleTicket => res.json({ Ticket: singleTicket }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewTicket = (req, res) => {
    Ticket.create(req.body)
        .then(newTicket => res.json({ Ticket: newTicket }))
        .catch(err => res.status(400).json(err))
    
}

module.exports.updateTicket = (req, res) => {
    Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true})
        .then(updatedTicket => res.json({ ticket: updatedTicket }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteTicket = (req, res) => {
    Ticket.deleteOne({ _id: req.params.id })
        .then(deletedTicket => res.json({ ticket: deletedTicket }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findRandom = (req, res) => {
    Ticket.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count)
            // skip() to skip docs equal to random number 
            // if random =1 , skip will skip first doc and find one will return second doc
            Ticket.findOne().skip(random)
                .then(randomTicket => res.json({ Ticket: randomTicket }))
                .catch(err => res.json({ message: "something went wrong", error: err }))
        })
        .catch(err => res.json({ message: "something went wrong", error: err }))

}