// require http

const http = require ('http')
// defining the port 
const PORT = 7000
// handling requests
const handleRequest = (request, response) => {
    response.end(`It works! Path hit was ${request.url}`);
}

const server = http.createServer(handleRequest)

server.listen ( PORT, () => {
    console.log(`server listening on : http:localhost:${PORT}`)
})