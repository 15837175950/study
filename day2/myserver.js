
const http=require('http');
const config=require("./config").config;

const server=http.createServer((req,res)=>{
    req.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    switch(req.url){
        case '/':
            res.end("hello world");
            break;
            case '/about':
                res.end("this is about page");
                break;
                default:
                    res.end("404 page");
                    break;
    }
})

server.listen(config.port,config.host,()=>{
    console.log("server running on http://"+config.host+":"+config.port+"/")
})

