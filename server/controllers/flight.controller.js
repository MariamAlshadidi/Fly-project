const Flight = require("../models/flight.model")

module.exports.findAllFlights = (req, res) => {
    Flight.find().sort('name')
        .then(allFlights => res.json({ flights: allFlights }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findFlightsBycity = (req, res) => {
    console.log('here')
    Flight.find({ destination: req.params.city })
        .then(allFlights => res.json({ flights: allFlights }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}


module.exports.findSingleFlight = (req, res) => {
    Flight.findOne({ _id: req.params.id })
        .then(singleFlight => res.json({ flight: singleFlight }))
        .catch(err => res.status(400).json(err))
}

module.exports.createNewFlight = (req, res) => {
    Flight.create(req.body)
        .then(newFlight => res.json({ flight: newFlight }))
        .catch(err => res.status(400).json(err))
}

module.exports.updateFlight = (req, res) => {
    Flight.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedFlight => res.json({ flight: updatedFlight }))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteFlight = (req, res) => {
    Flight.deleteOne({ _id: req.params.id })
        .then(deletedFlight => res.json({ flight: deletedFlight }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
}

module.exports.findRandom = (req, res) => {
    Flight.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count)
            // skip() to skip docs equal to random number 
            // if random =1 , skip will skip first doc and find one will return second doc
            Flight.findOne().skip(random)
                .then(randomFlight => res.json({ flight: randomFlight }))
                .catch(err => res.json({ message: "something went wrong", error: err }))
        })
        .catch(err => res.json({ message: "something went wrong", error: err }))

}

module.exports.SearchFlights = (req, res) => {
    console.log(req.query)
    const { source, destination, departure } = req.query
    console.log(departure)
    const date = new Date(departure)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    let nextDay = new Date(year, month, day+2)
    console.log(date,nextDay)
    // search date for all day, from today 00:00 am to tomorrow 00:00 am
    Flight.find({
        //  source:source, destination:destination
        source, destination, departure: {
            $gte: date, $lt: nextDay
        }
    })
        .then(allFlights =>
        res.json({ flights: allFlights })
        )
        .catch(err => res.json({ message: "something went wrong", error: err }))
}
