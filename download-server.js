const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8081;
const server = http.createServer((req, res) => {
  if (req.url === '/rostegar-website.zip') {
    const filePath = path.join(__dirname, 'rostegar-website.zip');
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="rostegar-website.zip"'
    });
    fs.createReadStream(filePath).pipe(res);
    return;
  }
  res.writeHead(404);
  res.end('Not found');
});
server.listen(port, () => console.log('ZIP download server on port ' + port));
