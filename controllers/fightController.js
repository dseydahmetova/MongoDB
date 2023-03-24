const Flight = require('../models/FlightModel')

module.exports.index = async (req, res) => {
  try {
    const flightsData = await Flight.find().sort({ departs: 1 })
    res.render('flights/Index', { flights: flightsData })
  } catch (err) {
    res.send(err.message)
  }
}

module.exports.new = async (req, res) => {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', { departsDate });
}

module.exports.update = async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    res.send(err.message)
  }
}

module.exports.edit = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id)
    res.render('flights/Edit', { flight })
  } catch (err) {
    res.send(err.message)
  }
}

module.exports.create = async (req, res) => {
  try {
    await Flight.create(req.body)
    res.redirect('/flights')
  } catch (err) {
    res.send(err.message)
  }
}

module.exports.delete = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id)
    res.redirect('/flights')
  } catch (err) {
    res.send(err.message)
  }

}

module.exports.show = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id)
    const airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    const selectedDestAirports = []
    flight.destinations.map(dest => {
      selectedDestAirports.push(dest.airport)
    })

    const selectOptions = airports.filter(item => !selectedDestAirports.includes(item))
    res.render('flights/Show', { flight, selectOptions })
  } catch (err) {
    res.send(err.message)
  }
}


// EXTRA LOGIC (for destinations)

module.exports.createDest = async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, {
      $push: {
        destinations: req.body
      }
    })
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    res.send(err.message)
  }
}


module.exports.deleteDest = async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, {
      $pull: {
        destinations: {
          _id: req.params.destId
        }
      }
    })
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    res.send(err.message)
  }
}


module.exports.editDest = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id)
    const airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    const [destination] = flight.destinations.filter(dest => dest._id.toString() === req.params.destId)
    res.render('destinations/Edit', { flightId: req.params.id, destination, airports })
  } catch (err) {
    res.send(err.message)
  }
}

module.exports.updateDest = async (req, res) => {
  try {
    await Flight.updateOne({ _id: req.params.id, 'destinations._id': req.params.destId }, {
      $set: {
        'destinations.$.airport': req.body.airport,
        'destinations.$.arrival': req.body.arrival
      }
    })
    res.redirect(`/flights/${req.params.id}`)
  } catch (err) {
    res.send(err.message)
  }
}
