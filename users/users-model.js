const db = require('../data/dbConfig.js');

module.exports = {
   get,
   add,
   findBy
}

function add(user) {
   return db('users').insert(user).then(ids => {
      return db('users');
   })
}

function findBy(username) {
   return db('users').where({ username }).first();
}

function get() {
   return db('users')
}