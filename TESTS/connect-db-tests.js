// note : penser à require dotenv (car ce fichier est le point d'entrée de notr application, pour l'instant) (ensuite ona ajoutera un oindex.js, qui sera là le VRAI point d'entrée)
require("dotenv").config();

// on récupère nos modèles 
const { List, Card, Tag } = require('../app/models/index.js');

// on se fait une metite méthode pour tester nos modèles
// méthode asynchrone (on requête la db, donc c'st forcément asynchrone)
const run = async () => {
    try {
        const lists = await List.findAll({
            include: [
                {
                    association: 'cards'
                }
            ]
        });
        console.log(lists);
        // il faudrait faire une boucle pour afficher toutes les carted de chaque liste
    } catch (error) {
        // si Sequelize nous renvoit une erreur, on la gère ici
        console.log(error);
    }
};

run();

//  pour executer ce fichier : dans le terminal : node connect-db-test.js