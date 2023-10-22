const { getCharById } = require ('../controllers/getCharById');
const { getUserHandler, postUserHandler } = require('../handlers/userHandler');
const { handleAllFavorite, handlePostFavorite, handleDeleteFavorite } = require ('../handlers/favoritesHandler');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.post('/character', postUserHandler);
router.get('/login', getUserHandler);
router.get('/fav', handleAllFavorite);
router.post('/fav', handlePostFavorite);
router.delete('/fav/:id', handleDeleteFavorite);

module.exports = router;