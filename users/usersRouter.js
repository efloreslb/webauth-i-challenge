const express = require('express');
const Users = require('./users-model.js');
const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const users = await Users.get();
      res.status(200).json(users);
   } catch {
      res.status(500).json({ error: "There was an error retrieving the data"});
   }
})

module.exports = router;