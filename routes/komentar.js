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
    var id = parseInt(req.params.id);

    Berita.findByPk(id)
    .then(data => {
        if (data) {
            res.render('formtambahkomentar', { 
                title: 'Tambah Komentar',
                berita: data
         });
        } else {
        // kalau data tidak ada send 404
        res.status(404).send({
            message: "Tidak ada berita dengan id= " + id
        })
        }
    })
    .catch(err => {
        res.json({
        info: "Error",
        message: err.message
        });
    });
});

// POST
router.post('/tambah/:id', function (req, res, next) {
    var id = parseInt(req.params.id);

    try { 
        var komentar = {
            text: req.body.text,
            beritumId: id
        }

        Komentar.create(komentar)
        .then( () => {
                  return res.redirect('/berita/detail/'+ id);
        });

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
});

module.exports = router;