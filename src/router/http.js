const  http = require('http')
const port = 8080


const server = http.createServer((req, res) =>{
  if(req.url === "/home"){
    res.writeHead(200, { 'content-type': 'text/html'})
    res.end("<h1>Home page</h1>")
  }
  if(req.url === "/users"){
    const users = [
      {
        name: "Ivan Martins",
        email: "ivanmartins@gmail.com"
      },
       {
        name: "Cintia Ferreira",
        email: "cintia.rf@gmail.com"
      }
    ]
    res.writeHead(200, { 'Content-type': "application/json"})
    res.end(JSON.stringify(users))
  }
})


server.listen(port, () => console.log(`servidor rodando na porta ${port}`))