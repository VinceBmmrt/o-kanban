const { Model, DataTypes } = require('sequelize');
const db = require('../database.js');

class Card extends Model {};

Card.init({
    title : {
        type: DataTypes.TEXT,
        allowNull: false 
    }, 
    color : {
        type: DataTypes.TEXT,
        allowNull: true 
    },  
    position: {
        type: DataTypes.INTEGER,
        allowNull: true 
    }
}, {
    sequelize: db, // on lui passe l'instance de connexion à la db
    tableName: "card"
})

module.exports = Card;