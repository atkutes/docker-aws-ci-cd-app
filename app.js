

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200);
        return res.end("OK");
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from CI/CD 🚀");
});

server.listen(3000);