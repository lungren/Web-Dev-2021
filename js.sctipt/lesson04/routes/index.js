var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/books-demo-2', async(req, res) => {
    try {
        let books = await Book.find({});
        res.render('books', {
            title: 'Книги',
            books: books
        });
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;