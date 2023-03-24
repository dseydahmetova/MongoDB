const express = require('express')

const router = express.Router()

const flightController = require('../controllers/fightController')


// index
router.get('/', flightController.index)

// new
router.get('/new', flightController.new)

//delete
router.delete('/:id', flightController.delete)

// update
router.put('/:id', flightController.update)

//create
router.post('/', flightController.create)

// edit 
router.get('/:id/edit', flightController.edit)

//show
router.get('/:id', flightController.show)




// EXTRA ROUTES (for destinations)

router.post('/:id', flightController.createDest)

router.delete('/:id/dest/:destId', flightController.deleteDest)

router.put('/:id/dest/:destId', flightController.updateDest)

router.get('/:id/dest/:destId', flightController.editDest)


module.exports = router