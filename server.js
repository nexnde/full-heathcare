const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./app.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found: ' + err.message);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('✅ App is now running at http://localhost:8080');
  console.log('Open your browser and go to http://localhost:8080');
});
