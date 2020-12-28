require('dotenv').config()
const express = require('express')
const app = express()
const bookRoute = require('./routes/books')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', bookRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`App is running on http://localhost:${PORT}`))