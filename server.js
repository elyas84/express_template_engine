const express = require ('express');
const { render } = require('pug');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/index', (req, res) => {

    res.render('index');

});

app.listen(port);
