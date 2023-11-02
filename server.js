const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response);
});

server.listen(4000, () => {
  console.log('Running at http://localhost:4000');
});

setTimeout(() => {
  console.log("closing...");
  server.close();
}, 15000);

