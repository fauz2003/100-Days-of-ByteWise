const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const {errorHandler} = require('../backend/middleware/errorHandler.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 8000;

app.use('/api/goal/', require('./routes/goalRoutes'));

app.use(errorHandler);

app.listen(port, (res, req)=>{
    console.log(`Server is listening on port ${port}`);
})