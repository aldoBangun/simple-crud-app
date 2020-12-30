const {createBook, getBooks, getBookById, getBookByTitle} = require('../models/book')
const {getAuthors} = require('../models/author')
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

const limits = {fileSize: 1024 * 1024 * 5}

const upload = multer({storage, limits})

router.post('/', upload.single('cover'), (req, res) => {
   req.body.cover = req.file.filename
   createBook(req.body, (err, results) => {
      if(err) return res.send({message: err.message})
      res.redirect('/book')
   })
})

router.get('/', (req, res) =>{
   getBooks((err, books) => {
      if(err) return res.json({err})
      getAuthors((error, authors) => {
         res.render('book/index', {books, authors})
      }) 
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