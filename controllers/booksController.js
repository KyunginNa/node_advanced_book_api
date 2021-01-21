const booksController = {
  index(request, response) {
    const collection = {
      books: [
        {
          title: 'Fun with Node',
          author: 'T. Ochman',
        },
        {
          title: 'Fun with Node Part II',
          author: 'T. Ochman',
        },
      ],
    }
    response.json(collection)
  },
}

module.exports = booksController
