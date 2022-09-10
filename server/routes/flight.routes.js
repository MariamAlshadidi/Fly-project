const FlightController = require("../controllers/flight.controller")

module.exports = app => {
    app.get("/api/flight", FlightController.findAllFlights)
    app.get("/api/flight/search", FlightController.SearchFlights)
    app.get("/api/flight/random", FlightController.findRandom)
    app.get("/api/flight/:id", FlightController.findSingleFlight);
    app.get("/api/flights/:city", FlightController.findFlightsBycity);
    app.post("/api/flight/new", FlightController.createNewFlight)
    app.put("/api/flight/update/:id", FlightController.updateFlight)
    app.delete("/api/flight/delete/:id", FlightController.deleteFlight)
};
