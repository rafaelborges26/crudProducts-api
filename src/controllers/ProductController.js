const mongoose = require('mongoose')

const Product = mongoose.model('Product')//pegando o module produto


module.exports = {
    async index(require, response) { //funcao pra rotas
        const products = await Product.find() //proxima linha so executa se tiver registros no bd

        return response.json(products) //retorna os dados
    },

    async store(request, response) {
        //criação
        const product = await Product.create(request.body) //pedindo para criar com os dados passados
        return response.json(product)
        
    }

  }
  
  
  
