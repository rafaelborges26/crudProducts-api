const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/products',ProductController.index) //chamar o controller

routes.get('/products/:id',ProductController.show) //mostrar por id

routes.post('/products',ProductController.store) //post

routes.put('/products/:id',ProductController.update)

routes.delete('/products/:id',ProductController.destroy)

   module.exports = routes //usarei no server.js

