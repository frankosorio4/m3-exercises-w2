const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API_QUESTIONARIOS',
        description: 'API para a criação formulários y para que o estudante possa cadastrar as suas respostas.',
        version: '1.0.0',
    },
    host: 'localhost:3000',
    security: [{'apiKeyAuth': []}],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: "Bearer <token>"
        }
    }
};

const arquivoSaida = './src/doc.swagger.json';
const arquivoRotas = ['./src/server.js'];

swaggerAutogen(arquivoSaida, arquivoRotas, doc);