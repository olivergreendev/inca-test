const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/angular-inca-test'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/angular-inca-test'});
});

app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`);
});