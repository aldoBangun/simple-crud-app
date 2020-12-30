const sql = require('../config/db.config')


module.exports = {
   getAuthors: (callback) => {
      sql.query('SELECT * FROM author', callback)
   }
}