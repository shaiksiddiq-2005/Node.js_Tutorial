const http = require("node:http");

const server =http.createServer( (req, res)=>{

    if(req.url === "/getSecretData"){
        res.end(" Hi from getSecretData route");
    }
    else {
    res.end("Hello sid!");
    }

});

server.listen(7777);