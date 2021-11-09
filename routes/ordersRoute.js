require('../data/database')
const express = require('express')
const router = express.Router();
const ordersController = require('../controlles/ordersController')

router.get('/', ordersController.getAll)

router.get('/email/:id', ordersController.getAllByEmail)


router.get('/:id', ordersController.getById)

router.post('/', ordersController.post)

router.put('/:id', ordersController.put)

router.delete('/:id', ordersController.delete)

module.exports = router