const Flight = require('../models/FlightModel')
const mongoose = require('mongoose')

module.exports.index = async (req, res) => {
	const flightsData = await Flight.find().sort({ departs: 1 })
	res.render('flights/Index', { flights: flightsData })
}

module.exports.new = async (req, res) => {
	const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', { departsDate });
}

// module.exports.update = async (req, res) => {
// 	// await Posts.findByIdAndUpdate(req.params.id, req.body)
// 	// res.redirect(`/flights/${req.params.id}`)
// 	await Flight.findByIdAndUpdate(req.params.id, {
// 		$push: {
// 			destinations: req.body
// 		}
// 	   })
// 		// res.redirect(`/flights/${req.params.id}`)
// 		res.redirect(`/flights`)
// }

module.exports.create = async (req, res) => {
	try {
		await Flight.create(req.body)
		res.redirect('/flights')
	} catch (err) {
		res.send(err.message)
	}
}

module.exports.show = async (req, res) => {
	 try {
		const flight = await Flight.findById(req.params.id)
    // .sort({"destinations.arrival": 1})
//       const flight = await Flight.findById(req.params.id).aggregate(
//       {$unwind: '$destinations'},
//  {$sort: {'destinations.arrival': 1}},
// {$group: {_id: '$_id', 'destinations': {$push:
// '$destinations'}}},
// {$project: {'destinations':
// '$destinations'}}).;


// const flight = await Flight.aggregate(
//   {
//     $match: {
//       "_id": req.params.id
//     }
//   }, {
//     $unwind: '$destinations'
//     }, {
//       $sort: {'destinations.arrival': 1 }
//     }
//   )

// const flight = await Flight.aggregate([
  // {
  //   $match: {
  //     "_id": req.params.id
  //   }
  // }, 
  // {
  //   $set: {
  //     destinations: {
  //       $sortArray:{
  //         input: '$destinations',
  //         sortBy: {arrival: 1}
  //       }
  //     }
  //   }
  //   }
  // ])


console.log(flight)
		res.render('flights/Show', {flight})
	} catch (err) {
		res.send(err.message)
	}
}


// EXTRA LOGIC (for destinations)

module.exports.createDest = async (req, res) => {
   await Flight.findByIdAndUpdate(req.params.id, {
    $push: {
        destinations: req.body
    }
   })
    res.redirect(`/flights/${req.params.id}`)
}