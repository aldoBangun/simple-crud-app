require('dotenv').config()
const {createConnection} = require('mysql')

const connection = createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DATABASE
})

module.exports = connection