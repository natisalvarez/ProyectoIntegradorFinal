const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    const id = req.params.id
    try {
      const response = await axios(`${URL}/${id}`);
        const character = response.data;
        if (character) {
            const { id, status, name, species, origin, image, gender } = character;
            res.json({
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            })
        } else {
            res.status(404).json({ message: 'Not found' })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

};

module.exports = getCharById;


/* const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);

    let character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
      status: data.status,
      species: data.species,
    };
    
    return character.name
      ? res.json(character)
      : res.status(404).send("Not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
}; */

 /* const axios = require("axios");
ANTES DE LA CLASE DE EXPRESS
const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then((result) => result.data )
  .then(({name, gender, origin, status, image, species}) => {
    let character = {
        id,
        name,
        gender,
        origin,
        image,
        status,
        species
    }
    res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(character))
  })
  .catch((error) => res.writeHead(500, {'Content-Type': 'text/plain'}).end(error.message) )
};

module.exports = {
  getCharById,
}; */