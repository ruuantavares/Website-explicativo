
const http = require('http');


const server = http.createServer((req, res) => {
  res.end('Olá, mundo! Este é um servidor Node.js');
});


server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
