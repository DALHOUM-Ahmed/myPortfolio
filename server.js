import { createServer } from "http";
import { parse } from "url";
import next from "next";

// cPanel often assigns a specific port, make sure to use that
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

// You may need a basePath if your app isn't running at domain root
const app = next({
  dev,
  // Uncomment and adjust if needed:
  // basePath: '/path-to-your-app'
});

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      // Be sure to parse the URL properly
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `> Server listening at http://0.0.0.0:${port} as ${
          dev ? "development" : process.env.NODE_ENV
        }`
      );
    });
  })
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
