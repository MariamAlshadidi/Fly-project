const TicketController = require("../controllers/ticket.controller")

module.exports = app => {
    app.get("/api/ticket", TicketController.findAllTickets)
    app.get("/api/ticket/random", TicketController.findRandom)
    app.get("/api/ticket/:id", TicketController.findSingleTicket);
    app.post("/api/ticket/new", TicketController.createNewTicket)
    app.put("/api/ticket/update/:id", TicketController.updateTicket)
    app.delete("/api/ticket/delete/:id", TicketController.deleteTicket)
};