const { User } = require("../DB_connection");

const postUser = async (email, password) => {
if (!email, password){
let user  = User.findOrCreate({email, password})
console.log(user)
return user
}
}

module.exports ={ 
    postUser
};