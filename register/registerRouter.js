const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const router = express.Router();

router.post('/', async (req, res) => {
   let user = req.body;

   const hash = bcrypt.hashSync(user.password, 12);
   user.password = hash;

   try {
      const saved = await Users.add(user);
      res.status(201).json(saved);
   } catch {
      res.status(500).json({error: "Error registering the new user"})
   }
})

module.exports = router;