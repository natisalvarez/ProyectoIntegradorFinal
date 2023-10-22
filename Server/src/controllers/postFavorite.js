const { Favorite } = require('../DB_connection');

let myFavorites = [];

const postFavorite = async (character) => {
        let favorites = await myFavorites.push(character)
        return favorites
};

module.exports = {
    postFavorite
}