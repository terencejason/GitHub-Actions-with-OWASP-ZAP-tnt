const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Welcome route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to OWASP test app</h1>');
});

// Intentional XSS vulnerability
app.get('/vuln', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello ${name}</h1>`); // ❌ vulnerable to reflected XSS
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
