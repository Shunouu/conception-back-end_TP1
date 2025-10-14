const express = require('express');
const app = express();
const port = 3000;

app.get('/exo-query-string', (req, res) => {
    console.log('Query params:', req.query);
    const age = req.query.age || 'non défini';
    res.send(`<h1>Age : ${age}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});