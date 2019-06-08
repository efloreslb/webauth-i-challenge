const express = require('express');
const helmet = require('helmet');
const session = require('express-session')

const authRouter = require('./auth/authRouter');
const registerRouter = require('./register/registerRouter');
const usersRouter = require('./users/usersRouter.js');

const server = express();

const sessionConfig = {
   name: 'donkey',
   secret: 'secret string',
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true,
   },
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/register', registerRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
   res.send(`
      <h1>Login and Register Database</h1>
   `)
})

module.exports = server;