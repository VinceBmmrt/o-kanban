const express = require('express');

const mainController = require('./controllers/BONUS_mainController');
const tagController = require('./controllers/tagController');

const router = express.Router();

// les routes deviennenbt DYNAMIQUES : elles fonctionnent quel que soit le nom du modèle !
router.route('/:modelName')
  .get(mainController.getAll)
  .post(mainController.create);

router.route('/:modelName/:id(\\d+)')
  .get(mainController.getOne)
  .patch(mainController.update)
  .delete(mainController.delete);

router.post('/cards/:id/tags', tagController.associateTagToCard);
router.delete('/cards/:cardId/tags/:tagId', tagController.removeTagFromCard);

module.exports = router;