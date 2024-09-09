const usuarioModel = require('../../database/models/usuarios')
const { hash } = require('bcrypt')

class UsuariosServices {

        async list(response) {
            try {
                const usuarios = await usuarioModel.findAll({
                    attributes: ['id', 'nome', 'sobrenome', 'email', 'permissao', 'createdAt', 'updatedAt']
                })
        
                return usuarios                
            } catch (error) {
                console.log(error)
                response.status(500).json({mensagem: 'Não foi possível listar os usuarios.'}) 
            }
        }
    
        async createUser({ email, nome, sobrenome, senha, permissao }) {
            try {
                const usuarioExiste = await usuarioModel.findOne({
                    where: {
                        email
                    }
                })

                if(usuarioExiste) {
                    //throw new Error("Erro no servidor")
                    return null
                }
        
                const senhaCriptografada = await hash(senha, 8)
        
                const usuario = await usuarioModel.create({
                    email, 
                    nome, 
                    sobrenome, 
                    senha: senhaCriptografada,
                    permissao
                })

                return usuario

            } catch (error) {
                console.log(error)
                response.status(500).json({mensagem: 'Não foi possível criar o usuario.'}) 
            }
        }
        
        // update() {}
    
        async deletar(id) {
            try {
                const usuarioExiste = await usuarioModel.findByPk(id)
        
                if(!usuarioExiste) {
                    return false
                }
        
                await usuarioExiste.destroy()
        
                return true                
            } catch (error) {
                console.log(error)
                response.status(500).json({mensagem: 'Não foi possível criar o usuario.'}) 
            }
        }
}

module.exports = UsuariosServices