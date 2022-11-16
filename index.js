const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');
const express = require('express')
const app = express()
const http = require('http');
const ffmpeg = createFFmpeg({ log: true });
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Https web server is listening on port ' + 3000);
});

app.use(express.static('public_html'));

/*
(async () => {
    await ffmpeg.load();
    ffmpeg.FS('writeFile', 'test.avi', await fetchFile('./test.avi'));
    await ffmpeg.run('-i', 'test.avi', 'test.mp4');
    await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
    process.exit(0);
})();

*/
