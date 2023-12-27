const express = require("express");
const router = express.Router();

// importer nos controleurs
const listController = require("./controllers/listController.js");
const cardController = require("./controllers/cardController.js");
const tagController = require("./controllers/tagController");

router.get("/", (request, response) => {
  response.send("hello");
});

/* LISTS */
// Récupérer toutes les listes
router.get("/lists", listController.getAllLists);
// Créer une nouvelle liste
router.post("/lists", listController.createList);
// récupérer une liste via son id
router.get("/lists/:id", listController.getOneList);
// modifier une liste
router.patch("/lists/:id", listController.modifyList);
// supprimer une liste
router.delete("/lists/:id", listController.deleteList);

// alternative
/*
router.route('/lists')
    .get(listController.getAllLists)
    .post(listController.createList);
*/

/* CARTES */
// Récupérer toutes les cartes d'une liste
router.get("/lists/:id/cards", cardController.getCardsInList);
router.get("/cards/:id", cardController.getOneCard);
router.post("/cards", cardController.createCard);
router.patch("/cards/:id", cardController.modifyCard);
router.delete("/cards/:id", cardController.deleteCard);

/* Tags */
router.get("/tags", tagController.getAllTags);
router.post("/tags", tagController.createTag);
router.patch("/tags/:id", tagController.modifyTag);
// router.put("/tags/:id?", tagController.createOrModify);
router.delete("/tags/:id", tagController.deleteTag);
router.post("/cards/:id/tags", tagController.associateTagToCard);
router.delete("/cards/:cardId/tags/:tagId", tagController.removeTagFromCard);

module.exports = router;
