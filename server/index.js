const express = require('express')

const app = express()

app.get('/',(require, response) => {
 //objeto require da respostas do navegador, como ip, e outras coisas
 //objeto response responde pro navegador
        response.send("Hello words!!")
//instalamos o nodemon para stalvar as alterações de forma automatica
})

app.listen(3001)

