const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Determine whether we're in development or production
const dev = process.env.NODE_ENV !== 'production';

// Initialize Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

// Define port - use the one provided by environment or fallback to 3000
const port = process.env.PORT || 3000;

// Prepare the app and start the server
app.prepare().then(() => {
  createServer((req, res) => {
    // Parse request URL
    const parsedUrl = parse(req.url, true);
    
    // Let Next.js handle all the routing
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}); 