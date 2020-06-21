const express = require('express');

const app = express();

app.use(express.static('./dist/hacknews'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/hacknews/'}),
);

app.listen(process.env.PORT || 8080);