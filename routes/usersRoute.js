const express = require('express')
const router = express.Router();
const userModel = require('../models/UserModel')
const userController = require('../controlles/userController')

// const jwt = require('jsonwebtoken')

router.get('/', userController.getAll)

router.get('/email/:id', userController.getByEmail)

router.get('/:id', userController.getById)

///
// router.post('/loginPost', (req, res)=> {
//     // Mock user
//     const user = 
//     jwt.sign(); 
// })

///

router.post('/', userController.post)

router.put('/email/:id', userController.putOrders)

router.put('/:id', userController.put)

router.delete('/email/:id', userController.deleteByEmail)

router.delete('/:id', userController.delete)



module.exports = router