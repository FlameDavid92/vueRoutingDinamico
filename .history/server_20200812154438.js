//server.js

const express = require('express');
const history = require('connect-history-api-fallback');
const app =express();

app.use(history());

var serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+port);

