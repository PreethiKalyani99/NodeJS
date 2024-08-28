const net = require("net");

const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        const url = data.toString()
        // console.log(url, "url")
        if(url.includes("/echo/")){
            const content = url.split(' ')[1].slice(6);
            socket.write(`HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: ${content.length}\r\n\r\n${content}`);
        }else{
            socket.write("HTTP/1.1 404 Not Found\r\n\r\n");
        }
  });
});

server.listen(4221);
console.log("Listening.....")