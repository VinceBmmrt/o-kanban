const { Model, DataTypes } = require('sequelize');
const db = require('../database.js');

class List extends Model {};
// Sequelize nous permet de traduire une table de la db en un objet javascript (instance de classe)

List.init({
    // pas besoin de spécifier l'id ni les timestamps : Sequelize se débrouille tout seul
    name : {
        type: DataTypes.TEXT,
        allowNull: true // on peut mettre true puisqu'on a mis une valeur par defaut
    },  
    position: {
        type: DataTypes.INTEGER,
        allowNull: true 
    }
}, {
    sequelize: db, // on lui passe l'instance de connexion à la db
    tableName: "list"
})

module.exports = List;