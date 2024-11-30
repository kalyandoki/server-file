const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  const responseObject = {
    message: "Hello, World!",
    status: "success",
    data: { id: 1, name: "Ganesh", role: "Developer" },
  };

  res.statusCode = 200;
  res.end(JSON.stringify(responseObject));
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
