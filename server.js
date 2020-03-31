const express = require('express');
const path = require('path');
const app = express();
const jsonServer = require('json-server');

const port = process.env.PORT || 5000;
app.use('/api', jsonServer.defaults(),jsonServer.router('db.json'));
app.use(express.json({extended: false}));
/*app.use(express.static(__dirname));*/
app.use(express.static('build'));

app.get('*', (req, res) =>  res.sendFile(path.resolve(__dirname, 'build', 'index.html')));
app.listen(port, console.log(`The server is listening to the port: ${port}`));
