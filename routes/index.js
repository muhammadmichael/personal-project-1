var express = require('express');
var router = express.Router();

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

module.exports = router;
