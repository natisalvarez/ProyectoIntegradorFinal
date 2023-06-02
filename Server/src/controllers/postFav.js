const { Favorite } = require('../DB_connection')

const postFav = (req, res) => {
    
    const { id, name, origin, status, image, species, gender } = req.body;

    const originName= origin.name
    
    console.log(req.body)
    if (!name || !origin || !status || !image || !species || !gender) {
        res.status(401).json("Faltan datos");
    }


    Favorite.findOrCreate({
        where: { id }, defaults: {
            name,
            origin: origin.name,
            status,
            image,
            species,
            gender,
        }
    })
        .then(() => {
            Favorite.findAll()
                .then((favorites) => {
                    res.status(200).json(favorites);
                })
                .catch((error) => {
                    res.status(500).json(error.message);
                });
        })
        .catch((error) => {
            res.status(500).json(error.message);
        });


}

module.exports = postFav