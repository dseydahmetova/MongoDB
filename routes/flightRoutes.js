const express = require('express')

const router = express.Router()

const flightController = require('../controllers/fightController')


// index
router.get('/', flightController.index)

// new
router.get('/new', flightController.new)

// delete
// router.delete('/:id', flighttController.delete)

// // update
// router.put('/:id', flighttController.update)

//create
router.post('/', flightController.create)

// // edit 
// router.get('/:id/edit', flightController.edit)

// show
// router.get('/:id', flightController.show)




// EXTRA ROUTES (for comments)

// router.post('/:id/comments', postControl.createComment)

// router.delete('/:id/comments/:cid', postControl.deleteComment)

// router.get('/:id/comments', postControl.indexComment)

// router.get('/:id/comments/:cid', postControl.showComment)

// router.put('/:id/comments/:cid', postControl.updateComment)


module.exports = router