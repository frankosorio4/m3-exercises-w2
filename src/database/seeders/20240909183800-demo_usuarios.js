const { Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {

    const { v4: uuidv4 } = require('uuid');

    const users = [
      {
        id: uuidv4(),
        nome: 'Usuario 1',
        sobrenome: 'Smith',
        email: 'usuario1@email.com',
        senha: '$2b$08$gi1ty7Hb2uH4HeJGtaEBReJC26ZTxm8x2iA5FKGIDlGNa6n86VJva', //123456
        permissao: 'criador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        nome: 'Usuario 2',
        email: 'usuario2@email.com',
        senha: '$2b$08$ujP8WLG0YQ3AX306LMJBr..Es9kHUha4R3UO4vAUTaTTCj4fKTDTq', //123456
        permissao: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await queryInterface.bulkInsert('usuarios', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};