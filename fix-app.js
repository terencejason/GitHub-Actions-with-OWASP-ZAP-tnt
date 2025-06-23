const express = require('express');
const escape = require('escape-html'); // ✅ Sanitize input
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to OWASP test app</h1>');
});

// Fixed XSS vulnerability
app.get('/vuln', (req, res) => {
  const name = escape(req.query.name); // ✅ Escape malicious input
  res.send(`<h1>Hello ${name}</h1>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
