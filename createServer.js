const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log(req.method, "request method")
    console.log(req.url, "request url")
    res.write("success", (err) => {
        if(err){
            console.log("error: ", err)
        }
    })
    res.end()
})
server.listen(5000)