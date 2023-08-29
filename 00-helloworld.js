const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Hello world! 한글 안깨지지롱');
});

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'));