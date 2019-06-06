const db = require('../data/dbConfig.js');

module.exports = {
   post
}

function post(user) {
   return db('users').insert(user).then(ids => {
      return db('users');
   })
}