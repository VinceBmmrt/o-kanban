const { Sequelize } = require('sequelize');

// on crée un nouvel objet sequelize (instance de la classe Sequelize)
const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    define: {
        // on utilise les timestamps, donc rien besoin de préciser à Seqlelize, il les ajoute par defaut.
        underscored: true
        // permet de tout renommer avec des underscores (snake case au lien de camel case) :
        // tranforme la colonne createdAt en created_at
        // et updatedAt en updated_at
    }
});

module.exports = sequelize;

