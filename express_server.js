const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/some-html', (req, res) => {
  res.send('<html><body><h1>bonjour html</h1></body></html>');
});

app.get('/some-json', (req, res) => {
  const data = { age: 22, nom: 'Jane' };
  res.json(data);
});

app.get('/transaction', (req, res) => {
  const transactions = [100, 2000, 3000];
  res.json(transactions);
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})