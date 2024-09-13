const { Router } = require('express')
const yup = require('yup')

const RespostasControllers = require('./respostas.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')
const { garantirAutenticacaoRBAC, garantirAutenticacao } = require('../../middlewares/garantirAutenticacao')

const respostasRouter = Router()
const respostasControllers = new RespostasControllers()

const schemaPostResposta = yup.object({
    body: yup.object({
        conteudo: yup.string().required("O campo \'conteudo\' da pergumta e obrigatorio."),
    })
})
const schemaDeleteQuestionario = yup.object({
    params: yup.object({
        perguntaId: yup.string().uuid("Id informado não é valido!").required("Id é obrigatório")
        
    }),
})

// respostasRouter.use(garantirAutenticacaoRBAC('criador'))

// respostasRouter.get('/', respostasControllers.index)
respostasRouter.use(garantirAutenticacao)
respostasRouter.use(garantirAutenticacaoRBAC('estudante'))
respostasRouter.post('/:perguntaId', validarSchema(schemaPostResposta),respostasControllers.create)
respostasRouter.delete('/:perguntaId', validarSchema(schemaDeleteQuestionario), respostasControllers.apagar)

module.exports = respostasRouter