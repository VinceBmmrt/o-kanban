const { Model, DataTypes } = require('sequelize');
const db = require('../database.js');

class Tag extends Model {};

Tag.init({
    name : {
        type: DataTypes.TEXT,
        allowNull: false 
    }, 
    color : {
        type: DataTypes.TEXT,
        allowNull: true 
    }, 
}, {
    sequelize: db, // on lui passe l'instance de connexion à la db
    tableName: "tag"
})

module.exports = Tag;