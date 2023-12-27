// on récupère les models depuis l'index (super important pour avoir les associations !!)
const { Card } = require('../models/index.js');

const cardController = {
    getCardsInList : async (request, response) => {
        // méthode async car Sequelize est async (communication avec la db)
        // bloc try/catch : bon reflexe pour gérer les erreurs

        // on récupère l'id de la liste demandée
        const listId = request.params.id;

        try {
            const cards = await Card.findAll({
                where: {
                    list_id: listId // toutes les cartes qui ont cette liste parente
                },
                include: [
                    {
                        association: 'tags', // on ajoute les tags de chaque carte
                    },
                ],
                order: [
                    // j'ordonne les cartes par ordre de position croissante
                    ['position', 'ASC'],
                ]
            });

            if (!cards) {
                return response.status(404).json({ "error": `Cards not not found in List with id ${listId}` })
            }

            // si on a bientrouvé les cartes, on les retourne :
            response.json(cards);

        } catch (error) {
            // si Sequelize nous renvoie une erreur, on la gère ici
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    getOneCard: async (request, response) => {
        // méthode qui récupère une carte en fonction de son id (id trouvé dans l'url de la requête) 

        try {
            // on récupère l'id dans l'url
            const cardId = request.params.id;

            // on cherche la carte avec cet id dans la db (+ ses tags)
            const card = await Card.findByPk(cardId, {
                include: ['tags']
            })
            ;
            // quelques vérifications
            if (card) {
                // on renvoit la liste touvée
                response.json(card);
            } else {
                response.status(404).json({ "error": "Card not found. Please verify the provided id." })
            }
        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    createCard: async (request, response) => {
        try {
            // je récupère les paramètrs passés dans le body 
            const { title, position, color, list_id } = request.body;

            const userInput = request.body;

            // petites vérifications
            if (!title) {
                return response.status(400).json({ error: 'title cannot be empty'});
            }

            if (!list_id) {
                return response.status(400).json({ error: 'list_id cannot be empty'});
            }

            if (typeof parseInt(list_id) !== "number") {
                return response.status(400).json({ error: "Invalid type: list_id should be a number" });
            }

            // si on arrive ici c'est que c'est tout bon, on créer la nouvelle carte :
            const newCard = Card.build(request.body);
            // on enregistre la nouvelle carte en db
            await newCard.save();
            // on la renvoie à l'utilisateur
            response.status(201).json(newCard);

        } catch (error) {
            console.log(error);
            response.status(500).json(error);
        }
    },

    deleteCard: async (request, response) => {
        try {
            // on récup l'id en paramètre
            const cardId = request.params.id;
            // on cherche dans la db la carte avec cet id
            const card = await Card.findByPk(cardId);

            if (!card) {
                return response.status(404).json({ "error": "Card not found. Please verify the provided id." })
            }

            // on la supprime en db
            await card.destroy();
            response.json('OK')

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    modifyCard: async (req, res) => {
        try {
            const cardId = req.params.id;
            const { title, color, list_id, position } = req.body;
  
            // on inclue les tags pour pouvoir les renvoyer à la fin de l'update
            // (sera probablement utile pour la S07)
            const card = await Card.findByPk(cardId, {
                include: ['tags']
            });

            
            if (!card) {
                res.status(404).json(`Cannot find card with id ${cardId}`);
            } else {
                // on ne change que les paramètres envoyés
                if (title) {
                    card.title = title;
                }
                if (list_id) {
                    card.list_id = list_id;
                }
                if (color) {
                    card.color = color;
                }
                if (position) {
                    card.position = position;
                }
                await card.save();
                res.json(card);
            }
  
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },
}

module.exports = cardController;