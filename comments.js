// Create web server
// Create a web server that listens to the port 3000 and returns the comments.json file when a GET request is made to the /comments URL.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  const readStream = fs.createReadStream('./comments.json');
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});