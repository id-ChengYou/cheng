const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`hello cheng -- ${new Date()}`);
});


server.listen(3000, () => {
});