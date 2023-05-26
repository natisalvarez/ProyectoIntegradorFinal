let myFavorites = [];

const postFav = (req, res) => {
const character = req.body; // el character que viene de la request.body
myFavorites.push(character)
return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const {id} = req.params; 
    myFavorites = myFavorites.filter(favorite => favorite.id !== id);
    Number(id);
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}