const {createBook, getBooks, getBookById, getBookByTitle} = require('../models/book')
const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
   destination: (req, file, callback) => {
      callback(null, './public/uploads')
   },
   filename: (req, file, callback) => {
      callback(null, new Date().getTime() + file.originalname)
   }
})

const upload = multer({storage, limits: {
   fileSize: 1024 * 1024 * 2
}})

router.get('/', (req, res) =>{
   getBooks((err, books) => {
      res.render('index', {books})
   })
})

router.get('/:id', (req, res) => {
   getBookById(+req.params.id, (err, books) => {
      if(err) return res.render('server-error')
      if(!books.length) return res.render('not-found')
      res.render('book/details', {book: books[0]})
   })
})

module.exports = router