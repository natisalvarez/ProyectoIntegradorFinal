const { Favorite } = require("../DB_connection");

const allFav = (id) => {
    const fav = Favorite.findAll({where: id})
    return allFav
};

module.exports = {
    allFav
};

