var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const auth = require('../auth')
const db = require('../models');
const Berita = db.beritas;
const Komentar = db.komentars;
const User = db.users;
const Op = db.Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {

  Berita.findAll({
    where: { isDelete: false },
    limit: 3,
    order: [ [ 'updatedAt', 'DESC' ]]
  })
  .then(data => {
    res.render('index', {
      title: 'Berita Umum',
      beritas: data
    });
  })
  .catch(err => {
    res.json({
      info: "Error",
      message: err.message,
      beritas: []
    });
  });
});

// Create a user
// GET
router.get('/register', function (req, res, next) {
  res.render('adduser', { title: 'Register' });
});

// POST
router.post('/register', function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);

  var user = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
  }

  User.create(user)
    .then(
      res.redirect('/login')
    )
    .catch(err => {
      res.redirect('/login')
    });

});

// Login
// GET
router.get('/login', function (req, res, next) {
  res.render('loginform', { title: 'Express' });
});

// POST
router.post('/login', function (req, res, next) {

  User.findOne({ where: { username: req.body.username } })
    .then(data => {
      if (data) {
        var loginValid = bcrypt.compareSync(req.body.password, data.password);
        if (loginValid) {

          // simpan session
          req.session.username = req.body.username;
          req.session.islogin = true;

          res.redirect('/');
        } else {
          res.redirect('/login')
        }
      } else {
        res.redirect('/login')
      }
    })
    .catch(err => {
      res.json({
        info: "Error",
        message: err.message
      });
    });

});

// Logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
