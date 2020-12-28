const {createBook, getBooks ,getBookByTitle} = require('../models/book')
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
   getBooks((err, results) => {
      res.render('index', {books: results})
   })
})

module.exports = router