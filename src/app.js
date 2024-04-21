const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/api/employee', require('./router/employee.routes'));

app.use((req, res) => {
    res.status(404).json({
        message: 'no se encontro la paguina'
    })
})


module.exports = app;