const SessionsService = require('./sessions.services')

const sessionsService = new SessionsService()

class SessionsControllers {
    /**
         * 
         * @param {import('express').Request} request 
         * @param {import('express').Response} response 
         * @returns 
     */
    async create(request, response) {
        const { body } = request

        try {

            const session = await sessionsService.login( body)
    
            if(!session) return response.status(400).json({ message: "Email/Senha inválida"}) 
    
            return response.status(204).json(session)
            
        } catch (error) {
            console.log(error)
            return response.status(500).json({ mensagem: 'Erro fazer o login.' })
        }
    }
}

module.exports = SessionsControllers