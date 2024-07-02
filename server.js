const http = require ('http');

const server = http.createServer ((req, res) => {
    if (req.url == '/' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader ('Content-Type', 'text/html');
        res.end ('<h1>Home Page </h1>');
    } else if (req.url =='/api' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader ('Content-Type', 'application/json');
        res.end (JSON.stringify ({message : 'API page'}));
    } else {
        res.statusCode = 404;
        res.setHeader ('Content-Type', 'text/html');
        res.end ('<h1> Page not found </h1>');
    }
});

const PORT = 3000;
server.listen (PORT, ()=>{
    console.log (`Server is running at https://localhost:${PORT}`);
});