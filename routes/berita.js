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
    if (req.files){
        console.log("File was found");
        return;
    }else{
        console.log("File was not found");
        return;
    }
    var file = req.files.uploadedimage;
    var img_name = file.name;
    
    var berita = {
      title: req.body.title,
      content: req.body.content,
      image: img_name
    }

    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png" ){            
        file.mv('public/images/uploadimages/'+file.name, function(err) {               
            if (err)
              return res.status(500).send(err);
                Berita.create(berita)
                .then(
                    res.redirect('/')
                )
                .catch(err => {
                    res.redirect('/')
                });
                });
    } else {
      message = "This format is not allowed , please upload file with '.png','.jpg'";
      res.render('index.ejs',{message: message});
    }
  
  });

module.exports = router;