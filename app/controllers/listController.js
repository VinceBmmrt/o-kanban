// on récupère les models depuis l'index (super important pour avoir les associations !!)
const { List } = require('../models/index.js');

const listController = {
    getAllLists : async (request, response) => {
        // méthode async car Sequelize est async (communication avec la db)
        // bloc try/catch : bon reflexe pour gérer les erreurs
        try {
            const lists = await List.findAll({
                include: [
                    {
                        association: 'cards', // on ajoute les cartes de chaque liste
                        include: [
                            {
                                association: 'tags' // et les tags de chaque carte
                            }
                        ],
                        order: ['tags', 'name', 'ASC']
                    },
                ],
                order: [
                    // j'ordonne les listes par ordre de position croissante
                    ['position', 'ASC'],
                    // ainsi que les cartes
                    ['cards', 'position', 'ASC']
                ]
            });
            response.json(lists);
        } catch (error) {
            // si Sequelize nous renvoie une erreur, on la gère ici
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    createList: async (request, response) => {
        try {
            console.log("BODY",request.body);
            // répérer les information du body de la requête
            const { name, position } = request.body;

            // on vérifie la présence du paraètre name
            if (!name) {
                return response.status(400).json({ "error": "Missing body parameter: name" });
            }

            // on vérifie que le paramètre position soit bien u nomber
            if (position && typeof position !== "number") {
                return response.status(400).json(	{ "error": "Invalid type: position should be a number" });
            }

            // ici on peut ajouter d'autres vérificatiopns comme par exemple : limiter le nombre de caractères du name (pour se prémunir encore mieux contre d'éventuelles injections)

            // on construit un nouvel objet issue de la classe liste (avec la méthode build)
            // (Note : la méthode build s'execute sur la classe List elle même)
            const newList = List.build({
                name,
                position
            });

            // on enregistre cet objet en db (avec la méthode save)
            // (Note : la méthode save s'execute sur une instance de la classe List)
            await newList.save();

            // on peut aussi faire la même chose avec la méthode .create (fait les 2 d'un coup)

            // ensuite on renvoit a liste nouvellement créée 
            response.status(201).json(newList);

        } catch (error) {
            // si Sequelize nous renvoie une erreur, on la gère ici
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    getOneList: async (request, response) => {
        // méthode qui récupère une liste en fonction de son id (id trouvé dans l'url de la requête) 

        try {
            // on récupère l'id dans l'url
            const listId = request.params.id;

            // on cherche la liste avec cet id dans la db
            // version avec juste la liste
            // const list = await List.findByPk(listId);

            // version avec la liste + les cartes + les tags
            // et les cartes ordonneés par ordre de position
            const list = await List.findByPk(listId, {
                include: [
                    {
                        association: 'cards',
                        include: [
                            {
                                association: 'tags'
                            }
                        ]
                    }
                ],
                order: [
                    // on ordonne les cartes par ordre de position croissante
                    ['cards', 'position', 'ASC']
                ]
            });

            // quelques vérifications
            if (list) {
                // on renvoit la liste touvée
                response.json(list);
            } else {
                response.status(404).json({ "error": "List not found. Please verify the provided id." })
            }
        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }

    },

    modifyList: async (request, response) => {
        try {
            // idem que getOneList : on récup l'id en paramètre
            const listId = request.params.id;
            
            // on cherche dans la db la liste avec cet id
            const list = await List.findByPk(listId);

            if (!list) {
                return response.status(404).json({ "error": "List not found. Please verify the provided id." })
            } 
            
            // une fois qu'on est certains que la liste existe
            // on récuère les infos à modifier dans le body
            const { name, position } = request.body; 

            // on vérifie la présence dans le body de chaque paramètre possible
            if(name) {
                // on pourrait ajoute plus des tests ici
                list.name = name
                // alternative on peut aussi utiliser la méthode update de Sequelize
                // await list.update({ name: name });
            }
            if(position) {
                // on pourrait ajoute plus des tests ici
                list.position = position
            }

            // on sauvegarde en db
            await list.save();
            // et on renvoie la liste modifiée
            response.json(list);

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    },

    deleteList: async (request, response) => {
        try {
            // on récup l'id en paramètre
            const listId = request.params.id;
            // on cherche dans la db la liste avec cet id
            const list = await List.findByPk(listId);

            if (!list) {
                return response.status(404).json({ "error": "List not found. Please verify the provided id." })
            }

            // on la supprime en db
            await list.destroy();
            response.json('OK')

        } catch (error) {
            console.log(error);
            response.status(500).json(error.toString());
        }
    }
}

module.exports = listController;