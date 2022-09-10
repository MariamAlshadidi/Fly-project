const mongoose = require("mongoose")

const flightscheme = new mongoose.Schema(
    {
        source: {
            type: String,
        },
        destination: {
            type: String,
        },

        departure: {
            type: Date,
        },
        // departure_date: {
        //     type: Date,
        //     default: function () {
        //         let d = new Date();
        //         let year = d.getFullYear();
        //         let month = d.getMonth();
        //         let day = d.getDate();
        //         let result = new Date(year + 1, month, day);
        //         return result;
        //     }
        // },
        // departure_time: {
        //     type: Date,
        //     default: function () {
        //         let d = new Date();
        //         let hours = d.getHours();
        //         let min = d.getMinutes();
        //         let sec = d.getSeconds();
        //         let result = new Date(`${hours}:${min}:${sec}`);
        //         return result;
        //     }
        // },
        arraival: {
            type: Date
        },
        estimated_time: {
            type: String
        },
        seats: {
            type: Number
        },
        type: {
            type: String
        },

        // flightNo: {
        //     // type: Number,
        //     // min: 10,
        //     // max: 9999
        //     type:String,
        //     default: 0
        // },
        flight_NO: {
            type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true
        },
        price: {
            type: Number
        },
        airline: {
            type: String
        },
        departure_airport: {
            type: String
        },
        arraival_airport: {
            type: String
        }


    },

    {
        // this will create createAt and updateAt directly
        timestamps: true
    })

// calculate estimated time
flightscheme.pre('save', function(next){
    let time=(new Date(this.arraival) - new Date(this.departure))
    let hours= Math.floor(time / (1000 * 60 * 60))
    let min = Math.floor(time / (1000 * 60 )) - (60*hours)
    this.estimated_time=`${hours} hr ${min} min`
    next()
})

const flight = mongoose.model("flight", flightscheme)

module.exports = flight
