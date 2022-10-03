var express = require('express');
var router = express.Router();
// var bcrypt = require('bcryptjs');

// const auth = require('../auth');
const db = require('../models');
const User = db.users;
const Berita = db.beritas;
const Komentar = db.komentars;
const Op = db.Sequelize.Op;

// Create (Post) Sebuah Berita
// GET
router.get('/tambah', function (req, res, next) {
    res.render('formtambahberita', { title: 'Tambah Berita' });
});

// POST
router.post('/tambah', function (req, res, next) {

    var berita = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image
    }
  
    Berita.create(berita)
      .then(
        res.redirect('/')
      )
      .catch(err => {
        res.redirect('/')
      });
  
  });

module.exports = router;