
const { server } = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;

conn.sync({ force: false })
  .then(() => {
    console.log('Tablas creadas en la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos con la base de datos:', error);
  });

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}.`);
});


// EJERCICIO SEGUNDA CLASE 
/*
const http = require('http');
const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {

      getCharById(res, Number(id));
    }
  })  .listen(3001, "localhost"); */


//EJERCICIO PRIMERA CLASE
/*
const http = require('http');

// Consigna:  A partir de http crea y levanta un servidor en el puerto 3001.

// Tomamos http y le levantamos un servidor.
// Create server siempre recibe dos parámetros: request y response. 

http.createServer((req, res)=> {
// Consigna: copia y pega la siguiente línea dentro del callback de tu servidor
  res.setHeader('Access-Control-Allow-Origin', '*');
   
   if (req.url.includes("/rickandmorty/character")){
        let id = req.url.split('/').at(-1)
        // con el -1 le estamos diciendo que queremos quedarnos
        // con la última posición del array
    let characterFilter = characters.filter(char => char.id === Number(id))
    
    res
    .writeHead(200,{"Content-type": "application/jeson"})
    .end(JSON.stringify(characterFilter))
}    
}).listen(3001, 'localhost');

// Para que nodemon escuche hay que agregarle el método Listen
// El primer parámetro es número de puerto y el segundo mi computadora.


// Crea un condicional que verfique si la url incluye el string "/rickandmorty/character".
// Esa URL sale de request (ver clase de Webserver), por lo tanto, agarramos a request.
// Los datos que obtenemos de una URL son siempre strings, no numeros. 

*/


/* EJERCICIO QUE ESTABA ESCRITO II
const characters = require('./utils/data');
const getCharById = require('./controllers/getCharById');
const getCharDetail =require ('./controllers/getCharDetail');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').at(-1)
    
    if (req.url.includes('onsearch')) {
        getCharById(res, id)
    }

    if (req.url.includes('detail')) {
        getCharDetail(res, id)
    }

}).listen(3001, 'localhost')

/* 
EJERCICIO Primera clase
if(req.url.includes("/rickandmorty/character")){
     const id = req.url.split('/').at(-1);
 
     let charactersFind = characters.find((char)=> char.id === Number(id))
     /// IMPORTANTE EL NUMBER (ID) 
     //Porque vienen en string, hay que parsearlos
 
     return res.writeHead(200, {'Content-type': 'application/json'}).end(JSON.stringify(charactersFind))
 } */

