const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About Page')
        //BLOCKING CODE (synchronous javascript)
        for(let i = 1; i < 1000; i++){
            for(let j = 1; j < 1000; j++){
                console.log([i,j]);
            }
        }
    }
    res.end('Error page')
})

server.listen(5004,()=>{
    console.log('Server is listening on port 5003..');
})