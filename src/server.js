require('dotenv').config()

const database = require('./database/config')
const express = require('express')
const APP_PORT = process.env.APP_PORT

const usuarioRouter = require('./dominios/usuarios')
const questionariosRouter = require('./dominios/questionarios')
const sessionsRouter = require('./dominios/sessions')
const respostasRouter = require('./dominios/respostas')

const app = express()
/** Config */
app.use(express.json()) // middleware => interceptador

/** DEFINIÇÃO DE ROTAS */
app.use('/usuarios', usuarioRouter)
app.use('/questionarios', questionariosRouter)
app.use('/sessions', sessionsRouter)
app.use('/respostas', respostasRouter)

async function iniciarServidor() {

    await database.authenticate()
    console.log("Banco de dados foi incializado com sucesso!")

    app.listen(APP_PORT, () => {

        console.log(`Servidor está rodando na porta ${APP_PORT}: http://localhost:${APP_PORT}`)
    })
}

iniciarServidor()