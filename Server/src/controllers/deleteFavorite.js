const { Favorite } = require('../DB_connection');

const deleteFavorite = (id) => {
    const favorite = Favorite.destroy({
        where: {
          id,
        },
      })
    return favorite
};

module.exports = {
    deleteFavorite
};