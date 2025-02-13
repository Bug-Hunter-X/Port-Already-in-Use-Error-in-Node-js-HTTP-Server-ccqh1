const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

function startServer(port) {
  const server = http.createServer(requestListener);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying another port...`);
      startServer(port + 1); // Try the next port
    } else {
      console.error(`Failed to start server: ${err.message}`);
    }
  });

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

const initialPort = 8080;
startServer(initialPort); 