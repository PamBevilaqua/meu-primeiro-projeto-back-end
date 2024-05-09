const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: ' Desenvolvedora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Fundadora do Programaria'
    },
    {
        nome: 'Nina da hora',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Hacker Antiracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)