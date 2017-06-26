var cookieParser = require('cookie-parser');
var express = require('express');
var harp = require('harp');
var i18n = require('i18n');
var app = express();

/*** SERVER SETUP ***/

app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(harp.mount(__dirname + "/public"));
app.use(i18n.init);

app.set('view engine', 'pug');

/*** SETUP LOCALIZATION ***/

i18n.configure({
    locales: ['en', 'fr'],
    cookie: 'locale',
    objectNotation: true,
    directory: __dirname + '/locales'
});

/*** ROUTES ***/
var router = express.Router();

app.get('/', function (req, res) {
    res.redirect('/' + req.getLocale() + '/landing');
});

app.get('/:page', function (req, res) {
    if (!i18n.getLocales().includes(req.params.page)) {
        res.redirect('/' + req.getLocale() + '/' + req.params.page);
    } else {
        res.redirect('/' + req.params.page + '/landing');
    }
});

router.get('/landing', function (req, res) {
    res.render('landing', { activeEl: 'home' });
});

router.get('/about', function (req, res) {
    res.render('about', { activeEl: 'about' });
});

router.get('/music', function (req, res) {
    res.render('music', { activeEl: 'music' });
});

router.get('/photography', function (req, res) {
    res.render('photography', { activeEl: 'photography' });
});

router.get('/portfolio', function (req, res) {
    res.render('portfolio', { activeEl: 'photography' });
});

router.get('/connect', function (req, res) {
    res.render('connect', { activeEl: 'connect' });
});

app.use('/en', function(req, res, next) {
    req.setLocale('en');
    res.cookie('locale', 'en', { maxAge: 900000, httpOnly: true });
    next();
}, router);

app.use('/fr', function(req, res, next) {
    req.setLocale('fr');
    res.cookie('locale', 'fr', { maxAge: 900000, httpOnly: true });
    next();
}, router);

/*** START SERVER ***/

app.listen(8888, function () {
    console.log('Server listening on port 8888!');
});
