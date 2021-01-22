const models = require('../models')

const booksController = {
  async index(request, response) {
    const collection = await models.Book.findAll({
      include: [
        {
          model: models.Author,
          as: 'author',
          attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
        },
      ],
      attributes: ['title'],
    })
    response.json({books: collection})
  },
}

module.exports = booksController

// const collection = {
//   books: [
//     {
//       title: 'Fun with Node',
//       author: 'T. Ochman',
//     },
//     {
//       title: 'Fun with Node Part II',
//       author: 'T. Ochman',
//     },
//   ],
// }
