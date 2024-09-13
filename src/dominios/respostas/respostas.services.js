const { Respostas } = require('../../database/models/respostas')


class RespostasServices {
   
    async create({ conteudo, perguntaId, usuarioId },response) {
        try {
            const resposta = await Respostas.create({
                conteudo, 
                perguntaId, 
                usuarioId
            })            
            return resposta
        } catch (error) {
            console.log(error)
                response.status(500).json({mensagem: 'Não foi possível cadastrar a resposta.'})
        }
    }
    
    // update() {}

    async apagar(perguntaId,response) {
        try {
            const respostaExiste = await Respostas.findByPk(perguntaId)
    
            if(!respostaExiste) {
                return false
            }
    
            await respostaExiste.destroy()
    
            return true            
        } catch (error) {
            console.log(error)
                response.status(500).json({mensagem: 'Não foi possível apagar a resposta.'})
        }
    }
}

module.exports = RespostasServices