require('../data/database')
const express = require('express')
const router = express.Router();
const productModel = require('../models/ProductModel')
const productController = require('../controlles/productController')

router.get('/', (req, res) => productController.getAll(req,res))

router.get('/:id', (req, res) => productController.getById(req,res))

router.post('/', (req, res) => productController.post(req,res))

router.put('/:id', (req, res) => productController.put(req, res) )

router.delete('/:id', (req, res) => productController.delete(req, res))

router.get('/categories/:category', (req, res) => productController.getCategory(req,res))

module.exports = router