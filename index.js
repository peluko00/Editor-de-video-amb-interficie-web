const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const ffmpeg =  require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg');
const ffprobePath = require('@ffprobe-installer/ffprobe');

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);


server.listen(3000, () => {
    console.log('Https web server is listening on port ' + 3000);
});

app.use(express.static('public_html'));
