const { User } = require("../DB_connection");

const getUser = (email, password) => {
    const user = User.findAll({where: email, password})
    return user
};

module.exports = {
    getUser
};
