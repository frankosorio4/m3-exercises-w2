const RespostasService = require('./respostas.services')

const respostasService = new RespostasService()

class RespostaControllers {

    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async create(request, response) {
        const { body } = request
        const { perguntaId } = request.params
        const { id } = request.usuario

        const Questionarios = await respostasService.create({
            ...body,
            perguntaId,
            usuarioId: id
        },response)

        return response.status(201).json(Questionarios)
    }

    async apagar(request, response) {
        const { perguntaId } = request.params
        console.log(perguntaId)
        const apagou = await respostasService.apagar(perguntaId,response)
        
        if(!apagou) {
            return response.status(400).json({ message: "Não foi possivel apagar"})
        }

        return response.status(204).end()
    }
}

module.exports = RespostaControllers