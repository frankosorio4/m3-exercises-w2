const { Router } = require('express')
const yup = require('yup')

const SessionsControllers = require('./sessions.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')

const sessionsRouter = Router()
const sessionsControllers = new SessionsControllers()

const schemaPostSession = yup.object({
    body: yup.object({
        email: yup.string().email("E-mail informado não é valido").required("Email é obrigatório"),
        senha: yup.string().required("Senha é obrigatória"),
    }),
})

sessionsRouter.post('/', validarSchema(schemaPostSession), sessionsControllers.create
/*
    #swagger.tags = ['login']
    #swagger.summary = 'Logar um usuario'
    #swagger.description = 'Endpoint para um usuário se logar'
    #swagger.parameters['dados'] = {
        in: 'body',
        description: 'Você pode se logar com os siguintes dados ou modificarlos com os seus.',
        required: true,
        schema: {
                    email: 'usuario1@email.com',
                    senha: '123456'
                }
    }
    #swagger.responses[200] = {
        description: '',
        schema: {
                id: 'Id de usuario',
                nome: 'Usuario 1',
                token: 'token de usuario'
        }
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos',
        schema: { mensagem: 'Email/Senha inválida.'}
    }
    #swagger.responses[500] = {
        description: 'Erro no servidor',
        schema: {mensagem: 'Erro fazer o login.'}
    }
*/
)

module.exports = sessionsRouter