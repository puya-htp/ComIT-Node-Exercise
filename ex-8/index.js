const http=require('http');
const port= 3001;

const requestHandler= (req,res)=>{
    res.end("Congrats you're using your first Node.js Web Server")
}

const server=http.createServer(requestHandler);
