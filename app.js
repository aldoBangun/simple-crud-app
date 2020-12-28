require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`App is running on http://localhost:${PORT}`))