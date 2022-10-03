const { Sequelize, DataTypes } = require('sequelize');
// driver sqlite

const sequelize = new Sequelize('BeritaDB', 'michaelmaulana', 'pass123', {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        useUTC: false,
        dateFirst: 1,
      },
    },
  });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.beritas = require('./berita')(sequelize, Sequelize);
db.komentars = require('./komentar')(sequelize, Sequelize);
db.users = require('./user')(sequelize, Sequelize);

// Associations One-To-Many
// db.beritas.hasMany(db.komentars);
// db.komentars.belongsTo(db.beritas);

// db.beritas.hasMany(db.komentars, { as: "komentars" });
// db.komentars.belongsTo(db.beritas, {
//   foreignKey: {allowNull: false},
//   as: "berita",
// });

db.beritas.hasMany(db.komentars, {
    foreignKey: 'beritumId',
    allowNull: false
  });
db.komentars.belongsTo(db.beritas);

module.exports = db;