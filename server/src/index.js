const http = require('http');
const chars = require ('./utils/data');

const PORT = 3001;

http.createServer((req, res)=> {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('/rickandmorty/character')) {
        const id = req.url.slice(-1);
        const character = chars.find(char => char.id === Number(id));
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character));
    }

}).listen(PORT, 'localhost');