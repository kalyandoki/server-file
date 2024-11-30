const http = require("http");
// Create the server
const server = http.createServer((req, res) => {
  // Set the response header to indicate a JSON response
  res.setHeader("Content-Type", "application/json");
  // Create a JSON object
  const responseObject = {
    message: "Hello, World!",
    status: "success",
    data: { id: 1, name: "John Doe", role: "Developer" },
  };

  // Write the JSON object as the response and end the request
  res.statusCode = 200;
  res.end(JSON.stringify(responseObject));
});
// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
