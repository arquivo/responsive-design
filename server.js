const { resolveInclude } = require('ejs');
const express = require('express')

var path = require('path');

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// starts website Routes ////////////////////////////////////////////////////////////////////////////////

// Homepage 
app.use(express.static('./public'));
app.get('/',function (req, res) {

  res.render('pages/home');
});

// Pages search results
app.use(express.static('./public'));
app.get('/pages-search-results',function (req, res) {

  res.render('pages/pages-search-results');
});

// Images search results
app.use(express.static('./public'));
app.get('/images-search-results',function (req, res) {

  res.render('pages/images-search-results');
});

// Pages: landing page
app.use(express.static('./public'));
app.get('/pages',function (req, res) {

  res.render('pages/pages');
});

// Pages advanced search
app.use(express.static('./public'));
app.get('/pages-advanced-search',function (req, res) {

  res.render('pages/pages-advanced-search');
});

// Images: landing page
app.use(express.static('./public'));
app.get('/images',function (req, res) {

  res.render('pages/images');
});

// Images: advanced search
app.use(express.static('./public'));
app.get('/images-advanced-search',function (req, res) {

  res.render('pages/images-advanced-search');
});
// ends website Routes ////////////////////////////////////////////////////////////////////////////////


// Open browser port: ${port} 
//////////////////////////////////////////////////////////////////////////////
app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));