const { verify } = require('jsonwebtoken')
const jwtSecret = "e1ba46759dc1501e9b4cf684df08fa17eabc955d"

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
function garantirAutenticacao(request, response, next) {
    const { authorization } = request.headers

    if(!authorization) throw new Error('JWT token não encontrado')
    
    // Bearer [token...]
    const [, token] = authorization.split(' ')

    try {
        const decoded = verify(token, jwtSecret)

        const { sub, permissao } = decoded;
        
        console.log({ sub, permissao })

        request.usuario = {
            id: sub,
            permissao
        }
        next()
    } catch (error) {
        throw new Error('JWT token não encontrado')
    }
}

/**
 * Middleware para garantir que o usuário tenha uma permissão específica
 * @param {string} permissaoParametro
 * @returns {import('express').RequestHandler}
 */
function garantirAutenticacaoRBAC(permissaoParametro) {
    return (request, response, next) => {
        const { authorization } = request.headers
    
        if(!authorization){
            return response
            .status(400)
            .json({ mensagem: 'Token não anexado' })
}
        
        // Bearer [token...]
        const [, token] = authorization.split(' ')
    
        try {
            const decoded = verify(token, jwtSecret)
    
            const { sub, permissao } = decoded;
            
            if(permissao !== permissaoParametro) {
                return response
                .status(400)
                .json({ mensagem: 'Voce não tem permissao para accesar nesta rota.' })}
    
            request.usuario = {
                id: sub,
                permissao
            }
            next()
        } catch (error) {
            response.status(500).json({ mensagem: 'A requisição falhou' })
        }
    }
}

module.exports = {
    garantirAutenticacao,
    garantirAutenticacaoRBAC,
}