const http = require('http')

const server = http.createServer((request, response) =>{
    
    const {method, url} = request

    if (method ==='GET' && url === "/fundamentos"){
        return response.end('Hello world, fundamentos nodejs aplicado.')
    }

    console.log({method, url})
})

const port = 3333
const hostname = 'localhost'

server.listen(port, hostname,() =>{
    console.log(`Servidor rodando na porta ${port}: http://${hostname}:${port}`)
})