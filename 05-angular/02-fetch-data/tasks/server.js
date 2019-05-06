const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const { PORT: port = 8000} = process.env;
require('./server/config/database');

app.use(express.static(path.join(__dirname, 'dist/tasks')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(require('./server/routes'));





app.listen(port, () => console.log(`express listening on port ${ port }`));
