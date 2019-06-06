const server = require('./server.js');
const PORT = 8765;

server.listen(PORT, () => {
   console.log(`Server listening on http://localhost:${PORT}`)
})