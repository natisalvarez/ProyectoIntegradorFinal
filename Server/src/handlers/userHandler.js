const getUser = require('../controllers/getUser');
const postUser = require('../controllers/postUser');

const getUserHandler = async (req, res) =>{
    const {email, password } = req.query;
    try{
        const user = await getUser({email, password});
        return res.status(201).json(user); 
      } catch (error) {
        return res.status(400).json({ error: error.message });
    }};

    const postUserHandler = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await postUser({email, password});
            return res.status(201).json(user); 
          } catch (error) {
            return res.status(400).json({ error: error.message });
        }};


module.exports = {
postUserHandler,
getUserHandler
};

