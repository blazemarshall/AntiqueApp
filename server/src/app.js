const express = require('express');
const app = express();
const antiquesRouter = require('./routes/antiques.router');
const cors = require('cors');
const notFound = require('./errors/notFound')
const errorHandler = require('./errors/errorHandler')
const bp = require('body-parser')


app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(express.json());

app.use('/antiques',antiquesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
