var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET countries page. */
router.get('/countries', function(req, res, next) {
    res.render('countries', { title: 'Страны' });
});

/* GET contacts page. */
router.get('/contacts', function(req, res, next) {
    res.render('contacts', { title: 'Контакты' });
});

/* GET counties page. */
router.get('/booking', function(req, res, next) {
    res.render('booking', { title: 'Заявка' });
});

/* POST booking page. */
router.post('/booking', function(req, res, next) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lungren0802@gmail.com',
            pass: 'fylhtq07122014'
        }
    });

    const mailOptions = {
        from: 'lungren0802@gmail.com',
        to: 'andruhovski@gmail.com',
        subject: 'Заявка на тур',
        text: 'Надійшла заявка на тур від ' + req.body.username +
            ' Зв`яжіться з ним за адресою ' + req.body.email +
            ' або за телефоном' + req.body.phone,
        html: 'Надійшла заявка на тур від <strong>' + req.body.username +
            '</strong> Зв`яжіться з ним за адресою ' +
            '<a href=mailto:' + req.body.email + '>' + req.body.email + '</a>' +
            ' або за телефоном <a href=callto:' + req.body.phone + '>' + req.body.phone + '</a>'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.render('booking-error', { title: 'Заявка' });
        } else {
            console.log('Email sent: ' + info.response);
            res.render('booking-success', { title: 'Заявка' });
        }
    });



});

module.exports = router;