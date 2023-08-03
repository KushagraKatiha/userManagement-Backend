const mongoose = require('mongoose')

const dbConnection = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.error(err.message);
    })
}

module.exports = dbConnection