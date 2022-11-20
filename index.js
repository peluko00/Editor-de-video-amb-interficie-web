const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);

app.use((_, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });

app.use(express.static('public_html'));

server.listen(3000, () => {
    console.log('Https web server is listening on port ' + 3000);
});


