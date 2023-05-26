
const axios = require("axios");

const getCharDetail = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data )
    .then(({name, gender, origin, status, image, species}) => { // (data =>)
      let character = {
          id, // id : data.id, 
          name, // name: data.name,
          gender,
          origin,
          image,
          status,
          species,
          status,
          origin // origin: data.origin.name
      }
      res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(character))
    })
    .catch((error) => res.writeHead(500, {'Content-Type': 'text/plain'}).end(error.message) )  
};

module.exports = {
    getCharDetail,
  };