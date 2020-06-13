const mongoose = require('mongoose')

const Product = mongoose.model('Product')//pegando o module produto


module.exports = {
    async index(req, res) { //funcao pra rotas
        const { page = 1 } = req.query //pegando parametro da url da var page, atribuindo p destructuring, page = 1 definindo um valor padrao
        const products = await Product.paginate({/*logica filter, where..*/}, {page, limit: 10}) //proxima linha so executa se tiver registros no bd

        return res.json(products) //retorna os dados
    },

    async show(req, res) {
        const product = await Product.findById(require.params.id)

        return res.json(product)
    },

    async store(req, res) {
        //criação                                   
        const product = await Product.create(req.body) //pedindo para criar com os dados passados
        return res.json(product)
        
    },

    async update(req, res) {                   //pegando um unico produto pelo id
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})//o new faz passar pra variavel o conteudo atualizado
        return res.json(product)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id) 
        return res.send()
    }

  }
  
  
  
