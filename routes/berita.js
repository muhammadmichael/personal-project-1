var express = require('express');
var router = express.Router();
const fs = require("fs");
// var bcrypt = require('bcryptjs');

// const auth = require('../auth');
const upload = require("../middleware/upload");
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
router.post('/tambah', upload.single('image'), function (req, res, next) {
    console.log(req.file);
    try {
        console.log(req.file);    
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }

        const readFileFromPublic = req.file.filename.toString();
        var berita = {
            title: req.body.title,
            highlight: req.body.highlight,
            content: req.body.content,
            image: readFileFromPublic,
        }

        Berita.create(berita)
            .then( () => {
                  return res.redirect('/');
            });

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
});

// Read (Get Detail) Sebuah Berita
// GET
router.get('/detail/:id', function (req, res, next) {
    var id = parseInt(req.params.id);

    Berita.findByPk(id)
    .then(data => {
        if (data) {
        res.render('detailberita', {
            title: 'Detail Berita',
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

// Update (Edit) Sebuah Berita
// GET
router.get('/ubah/:id', function (req, res, next) {
    var id = parseInt(req.params.id);

    Berita.findByPk(id)
    .then(data => {
        if (data) {
            res.render('formubahberita', { 
                title: 'Ubah Berita',
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
router.post('/ubah/:id', upload.single('image'), function (req, res, next) {
    var id = parseInt(req.params.id);

    try { 
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }

        const readFileFromPublic = req.file.filename.toString();
        var berita = {
            title: req.body.title,
            highlight: req.body.highlight,
            content: req.body.content,
            image: readFileFromPublic,
        }

        Berita.update(berita, {
            where: { id: id }
        })
        .then( () => {
                  return res.redirect('/');
        });

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
  
});

// Delete (Soft Delete) Sebuah Berita
// GET
router.get('/hapus/:id', function (req, res, next) {
    var id = parseInt(req.params.id);

    try { 
        var berita = {
            isDelete: true,
        }

        Berita.update(berita, {
            where: { id: id }
        })
        .then( () => {
                  return res.redirect('/');
        });

    } catch (error) {
        return res.send(`Error when trying to delete berita: ${error}`);
    }
  
  });

module.exports = router;