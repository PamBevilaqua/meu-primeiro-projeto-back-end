const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
   response.json({
    nome: 'Pamella Bevilaqua',
    imagem: 'https://github.com/simariaconceicao.png',
    minibio: 'Desenvolvedora e Instrutora'

   })
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.user(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)