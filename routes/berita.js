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
            content: req.body.content,
            image: readFileFromPublic,
        }

        Berita.create(berita)
            .then( () => {
                // fs.writeFileSync("./public/images/tmp/", req.file.data);
                  return res.send(`File has been uploaded.`);
            });

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
});

module.exports = router;