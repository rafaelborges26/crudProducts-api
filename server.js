const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json()) //permitir post em json

//Iniciando o database //padrao localhost:porta/schema
mongoose.connect('mongodb://localhost:27017/nodeapi',
{useNewUrlParser: true })

//require('./src/models/Product') //sem require-dir
requireDir("./src/models") //com o require dir pegando os models

//Rotas
app.use("/api", require("./src/routes")) //apartir da rota api no browser, mandaremos para o arquivo src/routes
//o use recebera todo tipo de requisicao
app.listen(3001)

