const http = require("http");
const fs = require("fs");
const path = require("path");

const LOG_FILE = "/logs/service2.log";
const PORT = 8000;

function logMessage(msg) {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${msg}\n`;
  fs.appendFileSync(LOG_FILE, log);
  console.log(log.trim());
}

setTimeout(() => {
  const server = http.createServer((req, res) => {
    if (req.method === "POST") {
      let body = "";
      req.on("data", chunk => body += chunk);
      req.on("end", () => {
        logMessage(body);
        res.writeHead(200);
        res.end("OK");

        if (body === "STOP") {
          logMessage("Received STOP. Shutting down.");
          server.close();
        }
      });
    } else {
      res.writeHead(405);
      res.end("Only POST allowed");
    }
  });

  server.listen(PORT, () => {
    console.log(`Service2 is listening on port ${PORT}`);
  });

}, 2000); // 2 seconds wait

