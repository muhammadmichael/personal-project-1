var express = require('express');
var router = express.Router();
// var bcrypt = require('bcryptjs');

// const auth = require('../auth');
const db = require('../models');
const User = db.users;
const Berita = db.beritas;
const Komentar = db.komentars;
const Op = db.Sequelize.Op;

// Create (Post) Sebuah Komentar
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
    var idBerita = parseInt(req.params.id);
    console.log(idBerita);
    console.log(req.body.title);
    console.log(req.body.highlight);
    console.log("bawah");
    try {
        var komentar = {
            beritumId: idBerita
        }

        Komentar.create(komentar)
        .then( (data) => {
            console.log("masuk")
                return res.redirect('/')
                
        });

        res.redirect('/');

    } catch (error) {
        console.log(error);
        return res.send(`Error when adding comments: ${error}`);
    }
});

module.exports = router;