const { createServer } = require("node:http");

const server = createServer((req, res)=>{
  res.end("First response");
});

server.listen(process.env.PORT || 3000);
