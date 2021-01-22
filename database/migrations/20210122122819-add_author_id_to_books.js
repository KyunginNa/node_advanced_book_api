'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Books', //Source Model
      'authorId', //name of the column
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors', //why plural?
          as: 'author',
          key: 'id',
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Books', 'authorId'
    )
  },
}
