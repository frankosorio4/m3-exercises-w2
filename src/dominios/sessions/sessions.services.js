const usuarioModel = require('../../database/models/usuarios')
const { compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const jwtSecret = "e1ba46759dc1501e9b4cf684df08fa17eabc955d"

class SessionServices {
    async login({ email, senha }) {

        //verifying the email
        const usuario = await usuarioModel.findOne({
            where: {
                email,
            }
        })

        if (!usuario) {
            return null
        }

        const senhaCriptografada = await compare(senha, usuario.senha)

        if (!senhaCriptografada) return null

        const token = sign(
            { permissao: usuario.permissao },
            jwtSecret,
            {
                subject: usuario.id,
                expiresIn: '1d'
            })

        return {
            id: usuario.id,
            nome: usuario.nome,
            token
        }

    }
}

module.exports = SessionServices