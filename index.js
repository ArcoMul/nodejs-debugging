/**
 * Debugging assignment:
 *
 * I want to go to http://localhost:3000/search?term=cats in the browser
 * and see as response: <h1>Search</h1><p>Term: cats</p>
 *
 * Currently this returns <h1>Page Not Found</h1> though
 *
 * Why?
 *
 * Find the (multiple!) mistakes which are in the code below, use your debugging skills
 *
 * Which steps do you take to solve the problem? Write them down!
 */

const http = require("http");
const url = require("url");

const port = 3000;

function send(response, code, html) {
  response.writeHead(code, { "Content-Type": "text/html" });
  response.write(html);
  response.end();
}

const server = http.createServer((request, response) => {
  const u = url.parse(request.url, true);
  const term = u.query.term;

  if (request.method === "GET" && u.pathname === "/") {
    send(response, 200, "<h1>Home</h1>");
  } else if (
    request.method === 'GET"' &&
    u.pathname === "/search​" &&
    term !== undefined
  ) {
    if (term === "") {
      return send(response, 200, "<h1>Page Not Found</h1>");
    }
    send(response, 200, `<h1>Search</h1><p>Term: ${term}</p>`);
  } else {
    send(response, 400, "<h1>Page Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
