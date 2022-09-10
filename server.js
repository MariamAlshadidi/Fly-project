require("dotenv").config();
const mongoose = require("mongoose")
const express = require("express")
const exp = require("constants")
const app = express()
const cors = require('cors') 



require("./server/config/mongoose.config")
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true}))

const AllflightRoutes = require("./server/routes/flight.routes")
AllflightRoutes(app)

const AlluserRoutes = require("./server/routes/user.routes")
AlluserRoutes(app)

const AllticketRoutes = require("./server/routes/ticket.routes")
AllticketRoutes(app)

app.listen(8000, () => console.log("This server is fired up on port 8000 in flight project"))