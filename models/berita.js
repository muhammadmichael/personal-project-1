module.exports = (sequelize, Sequelize) => {
    const Berita = sequelize.define("berita", {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB
        },
    });

    return Berita;
}