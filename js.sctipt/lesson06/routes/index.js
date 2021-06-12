var express = require('express');
var Book = require('../models/book');
var Cinema = require('../models/cinema')
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// /books/ GET (many)
router.get('/books/', async(req, res) => {
    try {
        const books = await Book.find({});
        res.render('books', { title: 'Книги', books: books })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /book/:id GET (1)
router.get('/book/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        if (book != null)
            res.render('book-details', { title: 'Книга деталі', book: book })
        else
            res.render('book-error', { title: 'Книга не знайдена', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /book/:id DELETE (1)
router.delete('/book/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (book != null)
            res.render('book-success', { title: 'Успіх', id: id })
        else
            res.render('book-error', { title: 'Книга не знайдена', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});
// /book/ POST (1)
router.post('/book', async(req, res) => {
    const book = new Book(req.body);
    try {
        await book.save();
        if (book != null)
            res.render('book-success', { title: 'Успіх', id: id })
        else
            res.render('book-error', { title: 'Книга не створена', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /book/:id PUT (1)
router.put('/book/:id', async(req, res) => {
    const id = req.params.id;
    let bookdata = {
        "author": req.body.author,
        "title": req.body.title,
        "published": req.body.published,
        "publisher": req.body.publisher,
    };
    console.log(bookdata);
    try {
        const book = await Book.findByIdAndUpdate(id, bookdata);
        if (book != null)
            res.status(200).send('Ok');
        else
            res.render('book-error', { title: 'Книга не знайдена', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

router.get('/book-delete/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const book = await Book.findById(id);
        if (book != null)
            res.render('book-delete', { title: 'Книга деталі', book: book })
        else
            res.render('book-error', { title: 'Книга не знайдена', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

router.get('/book-create/', function(req, res, next) {
    res.render('book-create', { title: 'Створення книги' });
});

// /cinemas/ GET (many)
router.get('/cinemas/', async(req, res) => {
    try {
        const cinemas = await Cinema.find({});
        res.render('cinemas', { title: 'Кінотеатри', cinemas: cinemas })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /cinema/:id GET (1)
router.get('/cinema/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const cinema = await Сinema.findById(id);
        if (cinema != null)
            res.render('cinema-details', { title: 'Кінотеатр деталі', cinema: cinema })
        else
            res.render('cinema-error', { title: 'Кінотеатр не знайдений', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /cinema/:id DELETE (1)
router.delete('/cinema/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const cinema = await Cinema.findByIdAndDelete(id);
        if (cinema != null)
            res.render('cinema-success', { title: 'Успіх', id: id })
        else
            res.render('cinema-error', { title: 'Кінотеатр не знайдений', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});
// /cinema/ POST (1)
router.post('/cinema', async(req, res) => {
    const cinema = new Сinema(req.body);
    try {
        await cinema.save();
        if (cinema != null)
            res.render('cinema-success', { title: 'Успіх', id: id })
        else
            res.render('cinema-error', { title: 'Кінотеатр не знайдений', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

// /cinema/:id PUT (1)
router.put('/cinema/:id', async(req, res) => {
    const id = req.params.id;
    let cinemadata = {
        "name": req.body.name,
        "rows": req.body.rows,
        "cols": req.body.cols,
        "__v": req.body.__v,
    };
    console.log(cinemadata);
    try {
        const cinema = await Сinema.findByIdAndUpdate(id, cinemadata);
        if (cinema != null)
            res.status(200).send('Ok');
        else
            res.render('cinema-error', { title: 'Кінотеатр не знайдений', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

router.get('/cinema-delete/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const cinema = await Сinema.findById(id);
        if (cinema != null)
            res.render('cinema-delete', { title: 'Кінотеатр деталі', cinema: cinema })
        else
            res.render('cinema-error', { title: 'Кінотеатр не знайдений', id: id })
    } catch (error) {
        console.error(error);
        res.render('error', error);
    }
});

router.get('/cinema-create/', function(req, res, next) {
    res.render('cinema-create', { title: 'Створення кінотеатру' });
});


module.exports = router;