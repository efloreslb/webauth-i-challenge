const express = require('express');
const bcrypt = require('bcryptjs');
const authorized = require('./authorized-middleware.js')

const Users = require('../users/users-model.js');
const router = express.Router();

router.post('/login', async (req, res) => {
   let { username, password } = req.body;

   try {
      const user = await Users.findBy(username);
      if(user && bcrypt.compareSync(password, user.password)) {
         req.session.user = user;
         res.status(200).json({ message: `Welcome ${user.username}, you are now logged in` })
      } else {
         res.status(400).json({ message: "You shall not pass!" })
      }
   } catch {
      res.status(500).json({ error: "Error logging in."})
   }
})

router.get('/logout', authorized, async (req, res) => {
   if(req.session) {
      req.session.destroy((err) => {
         if (err) {
            console.log(err);
            return res.status(500).json({ message: "There was an error" })
         }
         res.end();
      })
   }
})

module.exports = router;