var express = require('express');
var router = express.Router();
// var bcrypt = require('bcryptjs');

// const auth = require('../auth');
const db = require('../models');
const komentar = require('../models/komentar');
const User = db.users;
const Berita = db.beritas;
const Komentar = db.komentars;
const Op = db.Sequelize.Op;

// Create (Post) Sebuah Berita
// GET
router.get('/tambah/:id', function (req, res, next) {
    var idBerita = parseInt(req.params.id);
    res.render('formtambahkomentar', {
        title: 'Tambah Komentar',
        idBerita: idBerita,
    });
});

// POST
router.post('/tambah/:id', function (req, res, next) {
    try {
        var komentar = {
            text: req.body.text,
            beritaId: req.body.idBerita
        }

        Komentar.create(komentar)
        .then( (data) => {
                return console.log(data)
        });

    } catch (error) {
        console.log(error);
        return res.send(`Error when adding comments: ${error}`);
    }
});

module.exports = router;