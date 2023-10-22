const postFavorite = require ('../controllers/postFavorite');
const deleteFavorite = require ('../controllers/deleteFavorite');
const allFav = require ('../controllers/allFav');


const handleAllFavorite = async (req, res) =>{
  const {character} = req.query;
  try {
    myFavorites = await allFav({character})
    return res.status(200).json(myFavorites)
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

const handlePostFavorite = async(req, res) => {
    const {character} = req.body;
  try{
    myFavorites = await postFavorite({character})
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }};


  const handleDeleteFavorite = async(req, res) => {
    const {id} = req.params;
  try{
    myFavorites = await deleteFavorite({id})
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }};

  
module.exports = {
  handleAllFavorite,
  handlePostFavorite,
  handleDeleteFavorite
}