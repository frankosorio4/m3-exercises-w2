const { Router } = require('express')
const yup = require('yup')

const UsuariosControllers = require('./usuarios.controllers')
const { validarSchema } = require('../../middlewares/validacaoRotas')
const {garantirAutenticacao} =require('../../middlewares/garantirAutenticacao')
const usuarioRouter = Router()
const usuariosControllers = new UsuariosControllers()

const schemaPostUsuario = yup.object({
    body: yup.object({
        nome: yup.string().required("Nome é obrigatório"),
        sobrenome: yup.string(),
        email: yup.string().email("E-mail informado não é valido").required("Email é obrigatório"),
        senha: yup.string().min(3, "Minimo de 3 caracteres").max(16, "Maximo de 16 caracteres").required("Senha é obrigatória"),
        permissao: yup.mixed().oneOf(['criador','estudante'],'As permissoes só poden ser \'criador\' ou \'estudante.\'')
    }),
})

usuarioRouter.get('/', usuariosControllers.index)
usuarioRouter.post('/', validarSchema(schemaPostUsuario), usuariosControllers.create
    /*
    #swagger.tags = ['usuarios']
    #swagger.summary = 'Cria uma nova conta de usuário'
    #swagger.description = 'Endpoint para criação de uma nova conta de usuário'
    #swagger.parameters['dados'] = {
        in: 'body',
        description: 'Você pode criar um novo usuário com os seguintes dados ou modificalos.',
        required: true,
        schema: {
                nome: 'Usuario 3',
                sobrenome: 'usuario',
                email: 'usuario1@email.com',
                senha: '123456',
                permissao: 'criador'
        }
    }
    #swagger.responses[201] = {
        description: 'Conta criada com sucesso',
        schema: {
                nome: 'Usuario 3',
                sobrenome: 'usuario',
                email: 'usuario3@email.com',
                permissao: 'criador',
                createdAt:  '2024-06-27T00:00:00.000Z'
        }
    }
    #swagger.responses[400] = {
        description: 'Dados inválidos',
        schema: { mensagem: 'Um o mais dados faltantes. O nome, sexo, cpf, endereço, email, senha, e data de nascimento são obrigatórios.'}
    }
    #swagger.responses[409] = {
        description: 'Conflito de dados',
        schema: { mensagem: 'Cpf ja cadastrado.' || 'Email ja cadastrado.'}
    }
    #swagger.responses[500] = {
        description: 'Erro no servidor',
        schema: {mensagem: 'Não foi possível criar a conta.'}
    }
   */
)
usuarioRouter.delete('/:id', usuariosControllers.delete)

module.exports = usuarioRouter