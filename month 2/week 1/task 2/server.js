const http = require('http');
const fs = require('fs');
const path = require('path');
const fsp = require('fs').promises;


//const logEvents = require('./logEvents')

const EventEmitter = require('events');

class Emitter extends EventEmitter{};

const myEmitter = new Emitter();

// myEmitter.on('log', (msg) => logEvents(msg));
// myEmitter.emit('log', 'Log event emitted');

const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
    try{
        const data = await fsp.readFile(filePath, 'utf8');
        response.writeHead(200, {'Content-Type': contentType});
        response.end(data);
    }
    catch(err){
        console.log(err);
        response.statusCode = 500;
        response.end();
    }
}

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    const extension = path.extname(req.url);

    let contentType;

    switch(extension){
        case '.txt':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath =
        contentType === 'text/html' && req.url == '/'
        ? path.join(__dirname, 'index.html')
        : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, req.url, 'index.html')
        : contentType === 'text/html'
        ? path.join(__dirname, req.url)
        : path.join(__dirname, req.url);

    if (!extension && req.url.slice(-1) != '/') filePath += '.html';

    const fileExists = fs.existsSync(filePath);

    if(fileExists){
        serveFile(filePath, contentType, res);
    }
    else{
        console.log(path.parse(filePath));
    }
});

server.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`));


