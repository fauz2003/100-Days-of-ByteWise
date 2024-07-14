const http = require('http');
const https = require('https');

const PORT = 5000;

const requestListener = (req, res) => {
  if (req.url === '/api/advice' && req.method === 'GET') {
    https.get('https://api.adviceslip.com/advice', (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      });

    }).on('error', (err) => {
      console.error('Error fetching advice:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
