const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/flight",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
    .then(()=> console.log("Established a connection to the database"))
    .catch(err=> console.log("Something wnt wrong when connecting to the database", err))