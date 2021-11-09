require('../data/database')
const express = require('express')
const router = express.Router();
const ticketController = require('../controlles/ticketsController')

var {Ticketchema } = require("../models/validations/Ticket");
var validator = require("express-joi-validation").createValidator({  passError: false });


router.get('/', ticketController.getAll)

router.get('/:id', ticketController.getById)

router.post('/',validator.body(Ticketchema), ticketController.post)

router.put('/:id', ticketController.put)

router.delete('/:id', ticketController.delete)

module.exports = router