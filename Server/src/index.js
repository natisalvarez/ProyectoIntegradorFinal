
const { server } = require('./App')
const PORT = 3001;
const { conn } = require('./DB_connection');

server.listen(PORT, () => 
   console.log(`Server raised in port:  ${PORT}`)
);

