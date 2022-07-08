const http = require('http')

const server = http.createServer()
//Using event emitter api
//subscribe to it / listen for it / respond to it

server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)