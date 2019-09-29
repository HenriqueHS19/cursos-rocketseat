const express = require('express');
const cors = require('cors');
const mongodb = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Conectando ao DB
mongodb.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);