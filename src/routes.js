const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products',ProductController.index) //chamar o controller

routes.post('/products',ProductController.store)

   module.exports = routes //usarei no server.js

