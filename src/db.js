const {createPool} = require('mysql2/promise');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = require('./config');

const conectionDB = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});

module.exports = conectionDB;