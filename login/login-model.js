const db = require('../data/dbConfig.js');

module.exports = {
   findBy
}

function findBy(username) {
   return db('users').where({ username }).first();
}