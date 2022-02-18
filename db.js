const mariadb = require('mariadb');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname + '/.env')});

const pool = mariadb.createPool({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME , connectionLimit: 5});

module.exports={
getConnection: ()=>{
return new Promise((resolve,reject) => {
pool.getConnection()
.then((connection) => resolve(connection))
.catch((error) => reject(error));
});
}
}
