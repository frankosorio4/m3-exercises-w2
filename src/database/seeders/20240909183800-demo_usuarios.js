const { Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: Sequelize.UUIDV4,
        nome: 'John Doe',
        sobrenome: 'Smith',
        email: 'john.doe@example.com',
        senha: 'hashed_password', // Replace with a hashed password
        permissao: 'estudante',
      },
      {
        id: Sequelize.UUIDV4,
        nome: 'Jane Smith',
        email: 'jane.smith@example.com',
        senha: 'hashed_password', // Replace with a hashed password
        permissao: 'criador',
      },
      // Add more user objects as needed
    ];

    await queryInterface.bulkInsert('usuarios', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};