const Flight = require('../models/FlightModel')


module.exports.index = async (req, res) => {
    const flightsData = await Flight.find().sort({departs: 1})
    res.render('flights/Index', { flights: flightsData })
}

module.exports.new = async (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate});
}

module.exports.update = async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.create = async (req, res) => {
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch(err) {
        res.send(err.message)
    }
}

