var express = require('express');
var router = express.Router();

//import controller
const VenueController = require('../controllers/venues')

router.get('/', VenueController.findAll)
router.post('/', VenueController.store)
router.get('/:id', VenueController.show)
router.put('/:id', VenueController.update)
router.delete('/:id', VenueController.destroy)


module.exports = router