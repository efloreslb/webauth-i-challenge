const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const router = express.Router();

router.post('/', async (req, res) => {
   let { username, password } = req.body;

   try {
      const user = await Users.findBy(username);
      if(user && bcrypt.compareSync(password, user.password)) {
         res.status(200).json({ message: `Welcome ${user.username}, you are now logged in` })
      } else {
         res.status(400).json({ message: "You shall not pass!" })
      }
   } catch {
      res.status(500).json({ error: "Error logging in."})
   }
})

module.exports = router;