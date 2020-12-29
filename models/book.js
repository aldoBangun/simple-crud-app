const sql = require('../config/db.config')

module.exports = {
   createBook: (data, callback) => {
      sql.query('INSERT INTO book SET ?', data, callback)
   },
   getBooks: (callback) => {
      sql.query('SELECT * FROM book JOIN author ON book.author_id = author.id', callback)
   },
   getBookById: (id, callback) => {
      sql.query('SELECT * FROM book JOIN author ON book.author_id = author.id WHERE book.id = ?', [id], callback)
   },
   getBookByTitle: (keyword, callback) => {
      sql.query(
         'SELECT * FROM book JOIN author ON book.author_id = author.id WHERE title LIKE "%?%"',
         [keyword],
         callback
      )
   }
}