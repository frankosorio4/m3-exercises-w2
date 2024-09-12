const { Questionarios, Perguntas } = require('../../database/models/questionarios')


class QuestionariosServices {
    async list(carregarPerguntas, response) {
        try {
            var questionarios;
    
            if(carregarPerguntas) {
                questionarios = await Questionarios.scope('carregarPerguntas').findAll()
            } else {
                questionarios = await Questionarios.findAll()
            }
    
            return questionarios            
        } catch (error) {
            console.log(error)
                response.status(500).json({mensagem: 'Não foi possível criar o questionario.'}) 
        }
    }

    async create({ titulo, descricao, perguntas },response) {

        try {
            const questionario = await Questionarios.create({
                titulo,
                descricao,
                perguntas
            }, {
                include: [
                    {
                        model: Perguntas,
                        as: 'perguntas'
                    }
                ]
            })
    
            return questionario            
        } catch (error) {
            console.log(error)
                response.status(500).json({mensagem: 'Não foi possível criar o questionario.'}) 
        }
    }
    
    //update() {}

    async delete(id) {
        try {
            const questionarioExiste = await Questionarios.findByPk(id)
    
            if(!questionarioExiste) {
                return false
            }
    
            await questionarioExiste.destroy()
    
            return true         
        } catch (error) {
            console.log(error)
                response.status(500).json({mensagem: 'Não foi possível deletar o questionario.'}) 
        }
    }
}

module.exports = QuestionariosServices