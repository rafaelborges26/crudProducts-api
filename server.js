const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

//Iniciando o database //padrao localhost:porta/schema
mongoose.connect('mongodb://localhost:27017/nodeapi',
{useNewUrlParser: true })

//require('./src/models/Product') //sem require-dir
requireDir("./src/models") //com o require dir


const Product = mongoose.model('Product') //pegando o model product


app.get('/',(require, response) => {

 Product.create({ //insert
         title: 'React',
         description: 'A tecnology of aplication frontend',
         url: 'www.teste.com.br'}
         )

        return response.send("Hello word!!")
//instalamos o nodemon para stalvar as alterações de forma automatica
})

app.listen(3001)

