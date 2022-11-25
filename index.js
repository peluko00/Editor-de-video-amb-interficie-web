const express = require('express')
const app = express()
const http = require('http');
const download = require('download');
const server = http.createServer(app);
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

app.use((_, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });


app.use(express.static('public_html'));

var cookieParser = require('cookie-parser');
var session = require('express-session')
app.use(cookieParser());
app.use(session({
    secret: '34SDgsdgspxxxxxxxdfsG', // just a long random string
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: false
    }
}));

app.get('/download' , async (req, res, next) => {
    var link = req.query.url

    const urlObject = new URL(link);

    const hostName = urlObject.hostname;

    if (hostName == 'www.dropbox.com'){
        var firstPart = link.split("=")[0];
        link = firstPart + '=1';
    }

    const filePath = `${__dirname}/videos`;
    await download(link,filePath)
        .then((res) => {

            var ls=fs.readdirSync(`${__dirname}/videos`);
            for (let index = 0; index < ls.length; index++) {
                if (link.includes(ls[index])) {
                    if(!ls[index].includes("mp4") && !ls[index].includes("avi")) {
                        next(new Error('Aquesta extensio no esta permesa'))
                    }
                    req.session.video = ls[index]
                }
            }
            console.log('Download Completed');
        })
    res.sendFile(`${__dirname}/public_html/filter.html` );

});
app.get('/videoplayer' , (req, res) => {
    const range = req.headers.range
    const videoPath = `./videos/${req.session.video}`;
    const videoSize = fs.statSync(videoPath).size
    const chunkSize = 1 * 1e6;
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + chunkSize, videoSize - 1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers)
    const stream = fs.createReadStream(videoPath, {
        start,
        end
    })
    stream.pipe(res)
});

server.listen(3000, () => {
    console.log('Https web server is listening on port ' + 3000);
});

