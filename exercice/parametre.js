const express = require('express');
const app = express();
const port = 3000;

app.get('/get-user/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log(`ID reçu : ${userId}`);
    res.send(`<h1>User ID : ${userId}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});