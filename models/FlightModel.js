const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
   airport: { 
      type: String,   
      enum : [ 'AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
   },
   arrival: {
    type: Date
   }
  
})

const FlightSchema = new Schema({
   airline: { 
      type: String,   
      enum : [ 'American', 'Southwest', 'United'],
   },
   flightNo: { 
      type: Number,
      required: true,
      min: 10, 
      max: 9999
   },
   departs: { 
      type: Date, 
      default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
   },
   airport: {
      type: String,
      enum : [ 'AUS', 'DAL', 'LAX', 'SAN', 'SEA'], 
      default: 'SAN'
   }, 
   destinations: [destinationSchema]
   
})

const Flight = mongoose.model('flights', FlightSchema)

module.exports = Flight
