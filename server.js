const express = require('express');

const loginRouter = require('./login/loginRouter');
const registerRouter = require('./register/registerRouter');
const usersRouter = require('./users/usersRouter.js');

const server = express();
server.use(express.json());

server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
   res.send(`
      <h1>Login and Register Database</h1>
   `)
})

module.exports = server;