const usuarioModel = require('../../database/models/usuarios')
const { hash } = require('bcrypt')

class UsuariosServices {

    async list() {

            const usuarios = await usuarioModel.findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email', 'permissao', 'createdAt', 'updatedAt']
            })

            return usuarios

    }

    async createUser({ email, nome, sobrenome, senha, permissao }) {

        const usuarioExiste = await usuarioModel.findOne({
            where: {
                email
            }
        })

        if (usuarioExiste) {
            return null
        }

        const senhaCriptografada = await hash(senha, 8)

        usuario = await usuarioModel.create({
            email,
            nome,
            sobrenome,
            senha: senhaCriptografada,
            permissao
        })

        return usuario
    }

    // update() {}

    async deletar(id) {
        try {
            const usuarioExiste = await usuarioModel.findByPk(id)

            if (!usuarioExiste) {
                return false
            }

            await usuarioExiste.destroy()

            return true
        } catch (error) {
            console.log(error)
            response.status(500).json({ mensagem: 'Não foi possível criar o usuario.' })
        }
    }
}

module.exports = UsuariosServices